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

  constructor(private filamentService: FilamentService) {}

  onSubmit(form: NgForm): void {
    const newFilament = new Filament(
      form.value.brand,
      form.value.type,
      form.value.color,
      form.value.printTemp,
      form.value.weight,
      form.value.diameter
    );
    console.log(newFilament);
    this.filamentService.addFilament(newFilament);
  }
}
