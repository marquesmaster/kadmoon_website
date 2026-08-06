import type { Solution } from './types';
// Trade and customs vertical (primary focus)
import { customsBrokerSoftware } from './customs-broker-software';
import { tradeComplianceSoftware } from './trade-compliance-software';
import { landedCostSoftware } from './landed-cost-software';
import { freightForwardingSoftware } from './freight-forwarding-software';
import { tmsSoftware } from './transportation-management-system';
import { threePlSoftware } from './3pl-software';
import { warehouseManagement } from './warehouse-management-software';
import { fleetManagement } from './fleet-management-software';
// Enterprise and industry solutions
import { customErp } from './custom-erp';
import { customCrm } from './custom-crm';
import { hospitalManagement } from './hospital-management-software';
import { schoolManagement } from './school-management-software';

export type { Solution } from './types';

export const solutions: Solution[] = [
  customsBrokerSoftware,
  tradeComplianceSoftware,
  landedCostSoftware,
  freightForwardingSoftware,
  tmsSoftware,
  threePlSoftware,
  warehouseManagement,
  fleetManagement,
  customErp,
  customCrm,
  hospitalManagement,
  schoolManagement,
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
