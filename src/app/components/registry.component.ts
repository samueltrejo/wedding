import { Component } from '@angular/core';

@Component({
  selector: 'app-registry',
  template: `
  <div class="mt-3">
    <div class="display-5 text-center" data-bs-toggle="collapse" data-bs-target="#collapse-registry">
      <span class="font-dancing">Registry</span>
    </div>

    <div class="collapse show" id="collapse-registry">
      <div class="container mt-3">
        <div class="text-center">
          <div class="font-gurajada">
            <div>We're looking forward to celebrating with you on our big day. Having you attend our wedding is the greatest gift of all.</div>
            <div>If you're looking for wedding gift ideas, we've registered at these stores.</div>
            <div><a href="https://www.amazon.com/wedding/share/samuelyveronica" target="_blank">Amazon Registry</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [`
    .display-5 {
      line-height: unset;
    }
    .card {
      background-color: #B6A3A5!important;
    }
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
export class RegistryComponent {

}
