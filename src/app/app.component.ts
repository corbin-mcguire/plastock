import { Component, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FilamentService } from './lib/services/filament.service';
import { Filament } from './lib/types/filament.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'plastock';

  constructor(public filamentService: FilamentService) {}
}
