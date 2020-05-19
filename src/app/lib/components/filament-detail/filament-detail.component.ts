import { Component, OnInit } from '@angular/core';
import { Filament } from '../../types/filament.model';
import { FilamentService } from '../../services/filament.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-filament-detail',
  templateUrl: './filament-detail.component.html',
  styleUrls: ['./filament-detail.component.scss'],
})
export class FilamentDetailComponent implements OnInit {
  filament: Filament;

  // Font Awesome Icons
  closeIcon = faTimes;

  constructor(public filamentService: FilamentService) {}

  ngOnInit(): void {
    this.filamentService.getFilamentDetailObservable().subscribe((filament) => {
      this.filament = filament;
      this.filamentService.isFilamentDetailShown = true;
    });
  }

  closeFilamentDetail(): void {
    this.filamentService.isFilamentDetailShown = false;
  }
}
