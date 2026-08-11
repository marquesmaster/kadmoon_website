---
title: "RAG on your data with Azure AI Search and Copilot"
description: "How to build RAG on your own data with Azure AI Search, Azure OpenAI, and Copilot Studio: hybrid retrieval, grounding on Microsoft Fabric, and citations."
category: "Analytics & AI"
primaryKeyword: "rag azure ai search"
tags: ["retrieval augmented generation", "azure ai search", "azure openai", "copilot studio"]
takeaways:
  - "RAG retrieves relevant passages from your own content at question time and passes them to the model as context, so knowledge lives in an index you control instead of the model's weights."
  - "On the Microsoft stack the pieces are clear: Azure AI Search runs retrieval, Azure OpenAI writes the answer, and Copilot Studio surfaces it to users in Teams or a web chat."
  - "Retrieval quality sets the ceiling on answer quality, so pair vector search with keyword search (hybrid) and semantic ranking; one 2025 study found a hybrid retriever produced the lowest hallucination rate."
  - "Grounding on data in Microsoft Fabric and OneLake keeps answers current and inside your tenant, and citations let a user trace each claim back to the document that produced it."
  - "Grounding reduces hallucinations without removing them, so add guardrails: abstention when retrieval finds nothing, access control that respects who can see what, and continuous evaluation."
faqs:
  - q: "What is retrieval augmented generation?"
    a: "RAG lets a language model answer using your own documents rather than only its training data. At question time the system searches your content for the most relevant passages and passes them to the model, then asks it to answer from that material. It works because models read and synthesize text well, so you retrieve the right source instead of hoping the answer sits in the weights. On Azure that retrieval runs in Azure AI Search and the generation runs in Azure OpenAI."
  - q: "What does Azure AI Search do in a RAG system?"
    a: "Azure AI Search is the retrieval layer. It stores the vector embeddings of your content chunks and finds the passages closest in meaning to a question, and it also runs keyword search so exact matches like a product code or invoice number are not missed. Hybrid retrieval combines both, and semantic ranking reorders candidates for relevance before the model sees them. The quality of this step decides how good the final answer can be."
  - q: "How do you keep answers grounded and your data in your tenant?"
    a: "The model is instructed to answer only from the retrieved passages and to say it does not know when they lack the answer, and each answer carries citations back to the source document so a user can verify it. Data stays in your tenant because the content is indexed from Microsoft Fabric, OneLake, SharePoint, or Dataverse, and Azure OpenAI processes your prompts within your Azure subscription rather than training on them."
---

Retrieval augmented generation, or RAG, is the pattern that lets a language model answer questions from your own documents instead of only what it learned in training. It is why a Copilot can cite your actual expense policy, or an internal assistant can answer "what does our contract with this vendor say about termination?" without anyone opening the PDF. It is also the pattern most enterprises are reaching for: in McKinsey's early-2024 survey, [65% of organizations reported regularly using generative AI](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-2024), roughly double the share ten months earlier. This primer explains how to build one on the Microsoft stack, for people deciding whether to build rather than just read about it.

## What RAG is and why it works

A base language model knows a lot about the world and nothing about your business. Fine-tuning can teach it some of your knowledge, but it is slow, expensive to update, and hard to keep current. RAG takes a different route: at question time it searches your content for the most relevant passages and hands them to the model as context, then asks the model to answer from that material.

The reason this works is straightforward. Language models are good at reading and synthesizing text you give them. So instead of hoping the answer sits in the model's weights, you retrieve the right source and let the model read it and write a clear response. Your knowledge stays in an index you can update any time, and the model stays general.

The payoff is control. When a policy changes, you reindex a document and the answers change immediately, with no retraining cycle and no waiting on a model provider. When an answer is wrong, you trace it to the passage that produced it and fix the source. And because the content is yours, you decide what the model can see, which matters when different employees are allowed to see different things. Freshness, traceability, and access control are why RAG has become the default way to put a language model over private business data. This work sits alongside the broader question of [how to integrate LLMs into a business](/blog/llm-integration-for-business), where data readiness gates the whole effort.

## Chunk and embed your content

Two mechanics prepare your content for retrieval. First, chunking. You split documents into passages small enough to be specific but large enough to keep meaning. Chunk too big and you bury the relevant sentence in noise; chunk too small and you cut a passage off from the context it needs. Tuning this for your content type is more art than the tutorials admit, and Azure AI Search supports built-in text splitting during indexing so you can adjust chunk size and overlap without rebuilding your pipeline.

Second, embeddings. Each chunk is converted into a vector, a list of numbers that captures its meaning, using an Azure OpenAI embedding model. The vectors are stored in an Azure AI Search index. A question gets embedded the same way, and retrieval finds the chunks whose vectors sit closest to the question's. This is semantic search, and it finds passages that mean the same thing even when they use different words. Document retrieval is the workhorse use case here, and Grand View Research reports it accounted for [32.4% of global RAG revenue in 2024](https://www.grandviewresearch.com/industry-analysis/retrieval-augmented-generation-rag-market-report), ahead of every other application.

## Store and retrieve with Azure AI Search

Pure vector search is a starting point, not the finish. Azure AI Search runs vector search, keyword search, and hybrid retrieval that combines the two, and it adds a semantic ranker that reorders the top candidates for relevance. The quality of retrieval sets the ceiling on answer quality, so this is where the engineering effort concentrates.

The reason hybrid matters becomes obvious with business data. Vector search alone can miss an exact product code or invoice number, because semantic similarity is not the same as an exact match. Keyword search catches those identifiers, hybrid retrieval blends both scores, and the semantic ranker pushes the genuinely relevant passage above the merely similar ones before the model reads anything. A 2025 comparative study on hallucination mitigation found that a [hybrid retriever produced the lowest hallucination rate](https://arxiv.org/abs/2504.05324) among the approaches tested, beating both keyword-only and semantic-only search.

In code the flow is short: embed the question, query the index for the closest passages, and ask the model to answer only from them.

```python
question = "What does our vendor contract say about termination?"
query_vector = embed(question)  # Azure OpenAI embedding model

results = search_client.search(          # Azure AI Search, hybrid query
    search_text=question,                # keyword side
    vector_queries=[VectorizedQuery(vector=query_vector, k_nearest_neighbors=5,
                                     fields="content_vector")],
    query_type="semantic",               # semantic ranking on top
    top=5,
)

context = "\n\n".join(r["content"] for r in results)
prompt = (
    "Answer using only the context below. "
    "If it does not contain the answer, say you do not know.\n\n"
    f"Context:\n{context}\n\nQuestion: {question}"
)
answer = azure_openai.generate(prompt)
```

Tuning these steps against real questions from your users, rather than accepting library defaults, is usually what moves a system from impressive demo to trustworthy tool.

## Generate with Azure OpenAI and surface via Copilot Studio

Once retrieval returns the right passages, Azure OpenAI writes the answer. The model runs inside your Azure subscription, processes your prompts without training on them, and follows the grounding instruction to answer only from the supplied context. You control the deployment, the region, and the content filters.

Most users never see the API. Copilot Studio gives you a place to publish the assistant as a chat experience inside Microsoft Teams, a SharePoint site, or a web page, and it can call your Azure AI Search index directly as a knowledge source or route through a custom endpoint when you need more control over retrieval and prompting. The result is an assistant your staff reach in tools they already use, backed by content you index and permission.

## Grounding on Fabric and OneLake data

The value of RAG is grounding: the answer is tied to real source material you control. In a well-built system the model answers only from the retrieved passages and says it does not know when the passages lack the answer. That single constraint prevents most of the confident-but-wrong behavior people fear from language models.

Grounding also makes your data platform the product. Content indexed from a Microsoft Fabric lakehouse, from OneLake, from SharePoint, or from Dataverse gives the assistant a single, governed source to answer from, and reporting definitions or documentation curated in Fabric stay consistent with what the assistant tells people. If your documents are stale, contradictory, or badly organized, RAG will faithfully surface stale, contradictory answers, so a lot of a real deployment is curating, permissioning, and structuring the underlying content. For the platform side of that work, see [what Microsoft Fabric is](/blog/what-is-microsoft-fabric), and for keeping the source trustworthy, [Power BI governance](/blog/power-bi-governance-guide) sets the pattern for how definitions and access are managed.

## Accuracy, citations, and guardrails

For business use, an answer you cannot trace is an answer you cannot trust. A good system returns citations, so each claim points back to its source chunk and document and a user can verify it. That turns the assistant from a black box into something an auditor or a skeptical employee can check.

Grounding cuts hallucinations sharply without zeroing them out. The same research that documents large reductions also finds that [RAG systems still hallucinate in a meaningful share of cases when retrieval fails](https://arxiv.org/abs/2504.05324) to surface the right passage. That is the argument for guardrails rather than blind trust. Production guardrails include:

- The assistant declines when retrieval returns nothing relevant, rather than improvise an answer.
- Retrieval respects who is allowed to see what, so the model never surfaces a document a user should not see. Azure AI Search supports security filters and trimming so index results honor identity.
- A test set of real questions with known-good answers, run continuously, catches regressions when you change chunking, models, or prompts.
- Where a wrong answer is costly, a person stays in the loop for high-stakes output.

## Evaluating quality

You cannot improve what you do not measure, and a RAG system has two things worth measuring separately: whether retrieval found the right passage, and whether the answer used it faithfully. Build an evaluation set of representative questions with known-good sources, then score retrieval on whether the correct passage appeared in the top results and score the answer on groundedness and relevance against the retrieved context. Azure AI Foundry includes evaluators for groundedness, relevance, and retrieval that you can run on a schedule, so a change to chunk size or a model upgrade gets checked before it reaches users. Treat these scores the way you treat any other quality gate, and the system stays honest as your content and questions change.

## Building it on Azure

A production build has a recognizable shape: an ingestion pipeline that loads, cleans, chunks, and embeds your content into an Azure AI Search index; a retrieval layer that runs hybrid queries with semantic ranking; an orchestration layer that assembles context and calls Azure OpenAI with grounding instructions; a delivery surface in Copilot Studio; and an evaluation harness that scores quality over time. Around all of it sit access control, logging, and a feedback loop so answers improve as you learn what users actually ask.

The pattern is not exotic anymore, but the gap between a demo and a system people rely on is in the details: chunking tuned to your content, retrieval that finds the right passage, guardrails that fail safely, and a governed knowledge base. McKinsey's data helps explain why that gap matters: adoption is broad, yet only [11% of companies report using generative AI at scale](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-2024). The engineering discipline is what separates the two. Standing up a [Power Platform Center of Excellence](/blog/power-platform-center-of-excellence-guide) gives you the governance and reuse to run these assistants beyond a single pilot. If you want a grounded, citable assistant built on your own data in Azure and Fabric, [get in touch](/#contact).
