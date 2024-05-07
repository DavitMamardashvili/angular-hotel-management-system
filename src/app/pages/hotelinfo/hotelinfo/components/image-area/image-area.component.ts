import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-area',
  templateUrl: './image-area.component.html',
  styleUrl: './image-area.component.css'
})
export class ImageAreaComponent {
  @Input() hotel:any ;

  showImageGallery: boolean = false;

  openImageGallery() {
    this.showImageGallery = true;
  }
 
  closeImageGallery() {
    this.showImageGallery = false;
  }
}
