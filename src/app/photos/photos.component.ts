import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../data/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  photos: string[] = [];

  constructor(private photosService: PhotosService) {}

  ngOnInit(): void {
    this.photos = this.photosService.photos.slice();
  }
}
