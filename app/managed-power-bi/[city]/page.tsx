import { geoAngleRoute } from '@/lib/geo-route';

const route = geoAngleRoute('managed-power-bi');

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
