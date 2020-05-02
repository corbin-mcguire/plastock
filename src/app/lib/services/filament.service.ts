import { Injectable } from '@angular/core';
import { Filament } from '../types/filament.type';

@Injectable({
  providedIn: 'root',
})
export class FilamentService {
  private filaments: Filament[];

  constructor() {}

  addFilament(type: string, color: string, printTemp: number, weight: number) {}

  getFilaments(): Filament[] {
    return this.filaments;
  }

  deleteFilament(filament: Filament): void {}
}
