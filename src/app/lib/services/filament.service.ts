import { Injectable } from '@angular/core';
import { Filament } from '../types/filament.model';

@Injectable({
  providedIn: 'root',
})
export class FilamentService {
  private filaments: Filament[] = [];

  constructor() {}

  addFilament(newFilament: Filament) {
    this.filaments.push(newFilament);
  }

  getFilaments(): Filament[] {
    return this.filaments;
  }
}
