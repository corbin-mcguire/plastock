import { Component, OnInit } from '@angular/core';
import { FilamentService } from '../../services/filament.service';
import { Filament } from '../../types/filament.type';

@Component({
  selector: 'app-filament',
  templateUrl: './filament.component.html',
  styleUrls: ['./filament.component.scss'],
})
export class FilamentComponent implements OnInit {
  constructor(private filamentService: FilamentService) {}

  ngOnInit(): void {}

  getFilaments(): Filament[] {
    return this.filamentService.getFilaments();
  }

  getRemainingMaterial(filament: Filament): number {
    return 0;
  }
}
