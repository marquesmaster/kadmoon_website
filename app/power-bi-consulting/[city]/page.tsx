import { geoAngleRoute } from '@/lib/geo-route';

const route = geoAngleRoute('power-bi-consulting');

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
