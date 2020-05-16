import { Component, OnInit } from '@angular/core';
import { FilamentService } from '../../services/filament.service';

@Component({
  selector: 'app-filament-grid',
  templateUrl: './filament-grid.component.html',
  styleUrls: ['./filament-grid.component.scss'],
})
export class FilamentGridComponent implements OnInit {
  filamentBrand: string;
  filamentType: string;
  filamentColor: string;
  filamentPrintTemp: number;
  filamentWeight: number;
  filamentDiameter: number;

  isFilamentFormShown = false;

  constructor(private filamentService: FilamentService) {}

  ngOnInit(): void {
    this.filamentBrand = '';
    this.filamentType = '';
    this.filamentColor = '';
    this.filamentPrintTemp = 0;
    this.filamentWeight = 0;
  }

  toggleNewFilamentForm(): void {
    this.isFilamentFormShown = !this.isFilamentFormShown;
  }

  addFilament(): void {
    this.filamentService.addFilament(
      this.filamentBrand,
      this.filamentType,
      this.filamentColor,
      this.filamentPrintTemp,
      this.filamentWeight,
      this.filamentDiameter
    );
    this.filamentType = '';
    this.filamentColor = '';
    this.filamentPrintTemp = 0;
    this.filamentWeight = 0;
    this.filamentBrand = '';
    this.filamentDiameter = 0;

  }
  
  addNewFilament(): void {}
}
