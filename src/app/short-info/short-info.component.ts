import { Component, OnInit } from '@angular/core';
import { ShortInfoService } from '../data/short-info.service';

@Component({
  selector: 'app-short-info',
  templateUrl: './short-info.component.html',
  styleUrls: ['./short-info.component.css'],
})
export class ShortInfoComponent implements OnInit {
  image: string = '';
  info: string = '';

  constructor(private infoService: ShortInfoService) {}

  ngOnInit(): void {
    this.image = this.infoService.presentation_image;
    this.info = this.infoService.short_info;
  }
}
