import { Component } from '@angular/core';

import { ShortInfoService } from './data/short-info.service';
import { RulesService } from './data/rules.service';
import { PhotosService } from './data/photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShortInfoService, RulesService, PhotosService],
})
export class AppComponent {
  title = 'ngDz3';
}
