import { Job } from './job.model';

export interface Filament {
  brand: string;
  type: string;
  color: string;
  printTemp: number;
  weight: number;
  diameter: number;
  jobs: Job[];
}
