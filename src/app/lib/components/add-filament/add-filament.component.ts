import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Filament } from '../../types/filament.model';
import { FilamentService } from '../../services/filament.service';

@Component({
  selector: 'app-add-filament',
  templateUrl: './add-filament.component.html',
  styleUrls: ['./add-filament.component.scss'],
})
export class AddFilamentComponent implements OnInit {
  constructor(public filamentService: FilamentService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    const newFilament = new Filament(
      form.value.brand,
      form.value.type,
      form.value.color,
      form.value.printTemp,
      form.value.weight,
      form.value.diameter
    );
    this.filamentService.addFilament(newFilament);
  }
}
