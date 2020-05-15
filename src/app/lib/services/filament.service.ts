import { Injectable } from '@angular/core';
import { Filament } from '../types/filament.model';

@Injectable({
  providedIn: 'root',
})
export class FilamentService {
  private filaments: Filament[] = [];

  constructor() {}

  addFilament(brand: string, type: string, color: string, printTemp: number, weight: number, diameter: number) {
    const newFilament = new Filament(brand, type, color, printTemp, weight, diameter);
    this.filaments.push(newFilament);
  }

  getFilaments(): Filament[] {
    return this.filaments;
  }
}
