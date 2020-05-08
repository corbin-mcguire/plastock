import { Component, OnInit } from '@angular/core';
import { FilamentService } from '../services/filament.service';
import { Filament } from '../types/filament.type';

@Component({
  selector: 'app-filament-grid',
  templateUrl: './filament-grid.component.html',
  styleUrls: ['./filament-grid.component.scss'],
})
export class FilamentGridComponent implements OnInit {
  showAddFilament: boolean;
  filamentType: string;
  filamentColor: string;
  filamentPrintTemp: number;
  filamentWeight: number;

  constructor(private filamentService: FilamentService) {}

  ngOnInit(): void {
    this.showAddFilament = false;
    this.filamentType = '';
    this.filamentColor = '';
    this.filamentPrintTemp = 0;
    this.filamentWeight = 0;
  }

  toggleAddFilament(show: boolean): void {
    this.showAddFilament = !show;
  }

  addFilament(): void {
    this.filamentService.addFilament(
      this.filamentType,
      this.filamentColor,
      this.filamentPrintTemp,
      this.filamentWeight
    );
    this.filamentType = '';
    this.filamentColor = '';
    this.filamentPrintTemp = 0;
    this.filamentWeight = 0;
  }
}
