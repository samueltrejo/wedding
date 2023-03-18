import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <app-home></app-home>
    <app-whenandwhere></app-whenandwhere>
    <app-ourstory></app-ourstory>
    <app-registry></app-registry>
    <app-footer></app-footer>
    <!-- <router-outlet></router-outlet> -->
  `,
  styles: []
})
export class AppComponent {
  title = 'wedding';
}
