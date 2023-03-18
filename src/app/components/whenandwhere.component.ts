import { Component } from '@angular/core';

@Component({
  selector: 'app-whenandwhere',
  template: `
  <div class="mt-3">
    <div class="display-5 text-center" data-bs-toggle="collapse" data-bs-target="#collapse-whenandwhere">
      <span class="font-dancing">When and Where</span>
    </div>

    <div class="collapse show" id="collapse-whenandwhere">
      <div class="container mt-3">
        <div class="text-center">
          <div class="font-gurajada">
            <div>Saturday May the 13th, 2023</div>
            <div>At 5 o' clock in the evening</div>
            <div>The venue is The Farm at Fiery Gizzard</div>
            <div>Located at <a href="http://maps.google.com/?q=687 Dutchtown Rd, Tracy City, TN 37387">687 Dutchtown Rd, Tracy City, TN 37387, USA</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [`
    a {
      color: #42393f!important;
      text-decoration: none!important;
    }
    a:hover {
      color: #201c1f!important;
      text-decoration: underline!important;
    }
  `]
})
export class WhenandwhereComponent {

}
