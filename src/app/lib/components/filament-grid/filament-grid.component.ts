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

  constructor(private filamentService: FilamentService) {}

  ngOnInit() {}

  getFilaments(): Filament[] {
    return this.filamentService.getFilaments();
  }
}
