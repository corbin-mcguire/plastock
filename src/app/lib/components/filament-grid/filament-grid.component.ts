import { Component, OnInit } from '@angular/core';
import { FilamentService } from '../../services/filament.service';
import { Filament } from '../../types/filament.model';

@Component({
  selector: 'app-filament-grid',
  templateUrl: './filament-grid.component.html',
  styleUrls: ['./filament-grid.component.scss'],
})
export class FilamentGridComponent implements OnInit {
  isFilamentFormShown = false;
  filaments: Filament[] = [];

  constructor(private filamentService: FilamentService) {}

  ngOnInit() {
    this.filamentService.getFilaments();
    this.filamentService
      .getFilamentUpdateListener()
      .subscribe((filaments: Filament[]) => {
        this.filaments = filaments;
      });
  }

  onShowFilamentDetail(filament: Filament): void {
    this.filamentService.showFilamentDetail(filament);
  }
}
