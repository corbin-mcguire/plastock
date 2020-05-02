import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlHeaderComponent } from './lib/pl-header/pl-header.component';
import { FilamentGridComponent } from './lib/filament-grid/filament-grid.component';
import { FilamentComponent } from './lib/components/filament/filament.component';
import { FilamentDetailComponent } from './lib/components/filament/filament-detail/filament-detail.component';

@NgModule({
  declarations: [AppComponent, PlHeaderComponent, FilamentGridComponent, FilamentComponent, FilamentDetailComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
