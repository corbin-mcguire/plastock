import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Filament } from '../../types/filament.model';
import { FilamentService } from '../../services/filament.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-filament',
  templateUrl: './add-filament.component.html',
  styleUrls: ['./add-filament.component.scss'],
})
export class AddFilamentComponent implements OnInit {
  @Input() show: boolean;
  @Output() closeEvent = new EventEmitter();

  closeIcon = faTimes;

  constructor(public filamentService: FilamentService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const newFilament = new Filament(
      form.value.brand,
      form.value.type,
      form.value.color,
      form.value.printTemp,
      form.value.weight,
      form.value.diameter
    );
    this.filamentService.addFilament(newFilament);
    form.resetForm();
  }

  closeModal(): void {
    this.closeEvent.emit();
  }
}
