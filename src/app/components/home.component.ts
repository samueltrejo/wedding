import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="app-home container-fluid text-center pt-3">
    <img class="wedding-hero w-100" src="../../assets/wedding_hero.svg" />
  </div>
  `,
  styles: [`
  .wedding-hero {
    max-height: 1500px;
  }
  `]
})
export class HomeComponent {

}
