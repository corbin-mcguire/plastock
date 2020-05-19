import { Injectable } from '@angular/core';
import { Filament } from '../types/filament.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilamentService {
  private filaments: Filament[] = [];
  filamentDetailSubject: Subject<Filament> = new Subject();
  isFilamentDetailShown: boolean;

  constructor() {
    this.isFilamentDetailShown = false;
  }

  addFilament(newFilament: Filament) {
    this.filaments.push(newFilament);
    // TODO: POST request
  }

  getFilaments(): Filament[] {
    return this.filaments;
    // TODO: GET request
  }

  getFilamentDetailObservable(): Observable<Filament> {
    return this.filamentDetailSubject.asObservable();
  }

  removeFilament(filament: Filament): void {
    this.filaments.splice(this.filaments.indexOf(filament));
    this.isFilamentDetailShown = false;
    // TODO: DELETE request
  }
}
