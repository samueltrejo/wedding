import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div id="home" class="app-home container-fluid text-center">
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
