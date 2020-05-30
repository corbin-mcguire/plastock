import { Component, ElementRef } from '@angular/core';
import { FilamentService } from './lib/services/filament.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'plastock';

  constructor(public filamentService: FilamentService) {}
}
