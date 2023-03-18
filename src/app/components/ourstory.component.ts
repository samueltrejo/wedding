import { Component } from '@angular/core';

@Component({
  selector: 'app-ourstory',
  template: `
  <div class="mt-3">
    <div class="display-5 text-center" data-bs-toggle="collapse" data-bs-target="#collapse-outstory">
      <span class="font-dancing">Our Story</span>
    </div>

    <div class="collapse show" id="collapse-outstory">
      <div class="container mt-3">
        <div class="text-center">
          <div class="font-gurajada">
            <div>Cash + Extra</div>
            <div>De regalo queremos pedir dinero en efectivo.</div>
            <div>Esto nos ayudara a cubrir los gastos de la boda.</div>
            <div>Regalos sentimentalos serian extra.</div>
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
