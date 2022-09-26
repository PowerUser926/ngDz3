import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor() {}

  photos: string[] = [
    '../../assets/img/photo1.jfif',
    '../../assets/img/photo2.jfif',
    '../../assets/img/photo3.jfif',
    '../../assets/img/photo4.jfif',
    '../../assets/img/photo5.jfif',
    '../../assets/img/photo6.jfif',
    '../../assets/img/photo7.jfif',
    '../../assets/img/photo8.jfif',
  ];
}
