import { Injectable } from '@angular/core';
import { Filament } from '../types/filament.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FilamentService {
  private filaments: Filament[] = [];
  private filamentUpdated = new Subject<Filament[]>();
  private filamentDetailShown: Subject<Filament> = new Subject();
  isFilamentDetailShown: boolean;

  constructor(private http: HttpClient) {
    this.isFilamentDetailShown = false;
  }

  addFilament(newFilament: Filament) {
    this.http
      .post('http://localhost:3000/api/v1/filaments', newFilament)
      .subscribe((res) => {
        this.filaments.push(newFilament);
        this.filamentUpdated.next([...this.filaments]);
      });
  }

  getFilaments(): void {
    this.http
      .get<{ status: string; filaments: Filament[] }>(
        'http://localhost:3000/api/v1/filaments'
      )
      .subscribe((res) => {
        console.log(res);
        this.filaments = res.filaments;
        this.filamentUpdated.next([...this.filaments]);
      });
  }

  getFilamentUpdateListener(): Observable<Filament[]> {
    return this.filamentUpdated.asObservable();
  }

  showFilamentDetail(filament: Filament): void {
    this.filamentDetailShown.next(filament);
  }

  showFilamentDetailListener(): Observable<Filament> {
    return this.filamentDetailShown.asObservable();
  }

  removeFilament(filament: Filament): void {
    this.filaments.splice(this.filaments.indexOf(filament));
    this.isFilamentDetailShown = false;
    // TODO: DELETE request
  }
}
