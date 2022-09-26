import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShortInfoComponent } from './short-info/short-info.component';
import { RulesComponent } from './rules/rules.component';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [AppComponent, ShortInfoComponent, RulesComponent, PhotosComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
