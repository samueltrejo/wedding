import { Component } from '@angular/core';

@Component({
  selector: 'app-ourstory',
  template: `
  <div id="ourstory" class="mt-3">
    <div class="display-5 text-center" data-bs-toggle="collapse" data-bs-target="#collapse-outstory">
      <span class="font-dancing">Welcome</span><i class="bi bi-caret-down-fill"></i>
    </div>

    <div class="collapse show" id="collapse-outstory">
      <div class="container mt-3">
        <div class="text-center">
          <div class="font-gurajada">
            <div>To all of our loved ones; friends, family. Thank you for celebrating our wedding with us! Your company, love and wishes will make our day complete and we appreciate your love and support.
            We sincerely thank you for your company, gift and good wishes and for helping us make our wedding day an occasion we will always remember.
            You can see our wedding details below.<br>
            -Sincerely Samuel Trejo, and Veronica Gonzales.</div>
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
  `]
})
export class OurstoryComponent {


}
