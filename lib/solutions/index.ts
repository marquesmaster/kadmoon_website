import type { Solution } from './types';
import { customErp } from './custom-erp';
import { customCrm } from './custom-crm';
import { fleetManagement } from './fleet-management-software';
import { warehouseManagement } from './warehouse-management-software';
import { hospitalManagement } from './hospital-management-software';
import { schoolManagement } from './school-management-software';

export type { Solution } from './types';

export const solutions: Solution[] = [
  customErp,
  customCrm,
  fleetManagement,
  warehouseManagement,
  hospitalManagement,
  schoolManagement,
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
