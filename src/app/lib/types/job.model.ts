export class Job {
  private id: string;
  private materialCost: number;
  private printTime: number;

  constructor(id: string, materialCost: number, printTime: number) {
    this.id = id;
    this.materialCost = materialCost;
    this.printTime = printTime;
  }

  /**
   * Gets the ID of the job.
   * This can be the name of the model the user is printing or whatever.
   */
  getId(): string {
    return this.id;
  }

  /**
   * Gets the material cost of the job.
   * This is represented in grams.
   */
  getMaterialCost(): number {
    return this.materialCost;
  }

  /**
   * Gets the print time of the job.
   * Represented in hours
   */
  getPrintTime(): number {
    return this.printTime;
  }

  /**
   * Sets the ID of the job
   * @param newId new ID to be set
   */
  setId(newId: string): void {
    this.id = newId;
  }

  /**
   * Sets the filament cost of the job represented in grams
   * @param newCost new cost to be set
   */
  setMaterialCost(newCost: number): void {
    this.materialCost = newCost;
  }

  /**
   * Sets the print time of the job represented in hours
   * @param newPrintTime new print time to be set
   */
  setPrintTime(newPrintTime: number): void {
    this.printTime = newPrintTime;
  }
}
