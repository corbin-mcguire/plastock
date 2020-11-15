import { Component, ElementRef, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FilamentService } from './lib/services/filament.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'plastock';
  show = false;

  // Font Awesome Icons
  addIcon = faPlus;

  // Allows the uesr to press escape to close modal
  @HostListener('document:keydown.escape', ['$event']) handleKeyboardEvent(event: KeyboardEvent) {
    this.checkCloseModal();
  }

  constructor(public filamentService: FilamentService) {}

  toggleAddFilament(): void {
    this.show = !this.show;
  }

  /**
   * Allows the user to click in the deadzone to close the modal
   */
  checkCloseModal() {
    if (this.show) {
      this.show = !this.show;
    }
  }
}
