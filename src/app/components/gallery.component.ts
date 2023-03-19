import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  template: `
  <div id="gallery" class="mt-3">
    <div class="display-5 text-center" data-bs-toggle="collapse" data-bs-target="#collapse-gallery" data-bs-interval="2000">
      <span class="font-dancing">Pictures</span><i class="bi bi-caret-down-fill"></i>
    </div>

    <div class="collapse" id="collapse-gallery">
      <div class="container mt-3">
        <div class="text-center">
          <div class="font-gurajada">
            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div *ngFor="let i of numArr" class="carousel-item{{i == 0 ? ' active' : ''}}">
                  <img src="../../assets/gallery/gal{{i.toString()}}.jpg" class="" style="max-height: 500px;">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class GalleryComponent {
  numArr = Array.from(Array(28).keys());
}
