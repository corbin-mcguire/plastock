import { Component, OnInit, Input } from '@angular/core';
import { FilamentService } from '../../services/filament.service';
import { Filament } from '../../types/filament.model';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filament',
  templateUrl: './filament.component.html',
  styleUrls: ['./filament.component.scss'],
})
export class FilamentComponent implements OnInit {
  @Input() filament: Filament;

  // Font Awesome Icons
  removeIcon = faTrash;

  constructor(private filamentService: FilamentService) {}

  ngOnInit(): void {}

  removeFilament(filament: Filament) {
    this.filamentService.removeFilament(filament);
  }
}
