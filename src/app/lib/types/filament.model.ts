/**
 * @author Corbin McGuire
 * Filament Model for storing information about all the filaments a user adds.
 * Should be able to add, retrieve, edit, remove and modify certain properties
 */

import { Job } from './job.model';

export class Filament {
  id: string;
  brand: string;
  type: string;
  color: string;
  printTemp: number;
  weight: number;
  diameter: number;
  jobs: Job[];
  remainingMaterial: number;

  constructor(
    brand: string,
    type: string,
    color: string,
    printTemp: number,
    weight: number = 1000,
    diameter: number = 1.75
  ) {
    this.brand = brand;
    this.type = type;
    this.color = color;
    this.printTemp = printTemp;
    this.weight = weight;
    this.diameter = diameter;
    this.jobs = new Array<Job>();
    this.remainingMaterial = weight;
    this.id = `${brand}_${type}_${color}`;
  }

  /**
   * Gets the filament brand
   */
  getBrand(): string {
    return this.brand;
  }

  /**
   * Gets the filament type
   */
  getType(): string {
    return this.type;
  }

  /**
   * Gets the filament color
   */
  getColor(): string {
    return this.color;
  }

  /**
   * Gets the filament print temperature
   */
  getPrintTemp(): number {
    return this.printTemp;
  }

  /**
   * Gets the filament weight
   */
  getWeight(): number {
    return this.weight;
  }

  /**
   * Gets the filament diameter
   */
  getDiameter(): number {
    return this.diameter;
  }

  /**
   * Gets all the jobs of the filament
   */
  getJobs(): Job[] {
    return this.jobs;
  }

  /**
   * Gets the remaining material
   */
  getRemainingMaterial(): number {
    return this.remainingMaterial;
  }

  /**
   * Gets the ID of the filament
   */
  getId(): string {
    return this.id;
  }

  /**
   * Sets the filament brand
   * @param newBrand the new brand to set
   */
  setBrand(newBrand: string): void {
    this.brand = newBrand;
  }

  /**
   * Sets the filament type
   * @param newType the new type to set
   */
  setType(newType: string): void {
    this.type = newType;
  }

  /**
   * Sets the filament color
   * @param newColor the new color to set
   */
  setColor(newColor: string): void {
    this.color = newColor;
  }

  /**
   * Sets the filament print temperature
   * @param newPrintTemp the new print temperature to set
   */
  setPrintTemp(newPrintTemp: number): void {
    this.printTemp = newPrintTemp;
  }

  /**
   * Sets the filament weight
   * @param newWeight the new weight to set
   */
  setWeight(newWeight: number = 1000): void {
    this.weight = newWeight;
  }

  /**
   * Sets the filament diameter
   * @param newDiameter the new diameter to set
   */
  setDiameter(newDiameter: number = 1.75): void {
    this.diameter = newDiameter;
  }

  /**
   * Sets the ID for the filament
   * @param newId new Id to be set
   */
  setId(newId: string): void {
    this.id = newId;
  }

  /**
   * Adds a new job to the filament's list of jobs
   * @param newJob the new job to add
   */
  addJob(newJob: Job): void {
    this.jobs.push(newJob);
    this.remainingMaterial -= newJob.getMaterialCost();
  }

  /**
   * Removes a job from the filaments job list
   * @param job the job to remove
   */
  removeJob(job: Job): boolean {
    const jobIndex = this.jobs.indexOf(job);
    if (jobIndex !== -1) {
      this.jobs.splice(jobIndex, 1);
      this.remainingMaterial += job.getMaterialCost();
      return true;
    } else {
      return false;
    }
  }

  /**
   * Don't know if this would be needed or not.
   */
  private getJob(): Job {
    return null;
  }
}
