import { Component, OnInit } from '@angular/core';
import { FilamentService } from '../services/filament.service';
import { Filament } from '../types/filament.type';

@Component({
  selector: 'app-filament-grid',
  templateUrl: './filament-grid.component.html',
  styleUrls: ['./filament-grid.component.scss'],
})
export class FilamentGridComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
