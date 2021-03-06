import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FileSizePipe } from './FileSizePipe';
import { ttClassDirective } from './tt-class.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, FileSizePipe,ttClassDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
