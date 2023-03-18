import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="bd-footer pt-4 pt-md-5 mt-5 bg-body-tertiary">
    <div class="container pt-4 pt-md-5 px-4 px-md-3 text-body-secondary">
      <div class="row">
        <div class="col-lg-3 mb-3">
          <!-- <img class="wedding-logo d-inline-flex align-items-center mb-2 text-body-secondary text-decoration-none" src="../../assets/wedding_logo.svg" /> -->
          <div class="wedding-logo d-inline-flex align-items-center mb-2 text-body-secondary text-decoration-none" href="/" aria-label="Bootstrap"></div>
          <ul class="list-unstyled small">
            <li class="mb-2">To all of our loved ones; friends, family. Thank you for celebrating our wedding with us! Your company, love and wishes will make our day complete and we appreciate your love and support.</li>
            <li class="mb-2">We sincerely thank you for your company, gift and good wishes and for helping us make our wedding day an occasion we will always remember.</li>
            <li class="mb-2">-Sincerely Samuel Trejo, and Veronica Gonzales.</li>
          </ul>
        </div>
        <div class="col-6 col-lg-2 offset-lg-1 mb-3">
          <h5>Our Socials</h5>
          <ul class="list-unstyled">
          <li class="mb-2"><a href="https://www.instagram.com/majestadtn/" target="_blank">Majestad</a></li>
          <li class="mb-2"><a href="https://www.instagram.com/manoscreativastn/" target="_blank">ManosCreativas</a></li>
          <li class="mb-2"><a href="https://www.instagram.com/_veritogonzales/" target="_blank">@Veronica</a></li>
          <li class="mb-2"><a href="https://www.instagram.com/mrto0ns/" target="_blank">@Samuel</a></li>
          </ul>
        </div>
        <div class="col-6 col-lg-2 mb-3">
          <h5>The Venue</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="https://www.thefarmatfierygizzard.com/" target="_blank">The Farm at Fiery Gizzard</a></li>
          </ul>
        </div>
        <div class="col-6 col-lg-2 mb-3">
          <h5>Our Church</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="https://www.facebook.com/iglesiadediosrocafirme" target="_blank">Roca Firme</a></li>
            <li class="mb-2"><a href="https://www.facebook.com/CedarHillTN" target="_blank">Cedar Hill</a></li>
          </ul>
        </div>
        <div class="col-6 col-lg-2 mb-3">
          <h5>Other Links</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="https://www.amazon.com/wedding/share/samuelyveronica" target="_blank">Wedding Registry</a></li>
            <li class="mb-2"><a href="https://www.amazon.com/wedding/share/samuelyveronica" target="_blank">List de Regaloz</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  `,
  styles: [`
    .bd-footer {
      background-color: #a19496!important;
    }
    .wedding-logo {
      height: 100px;
      width: 200px;
      background-image: url('../../assets/wedding_logo.svg')!important;
      background-position: top;
      background-repeat: no-repeat;
      background-size: cover;
    }
    a {
      color: #42393f!important;
      text-decoration: none!important;
    }
    a:hover {
      color: #201c1f!important;
      text-decoration: underline!important;
    }
    h5 {
      font-family: 'Dancing Script', cursive;
      font-size: 1.4rem;
    }
    li {
      font-family: 'Work Sans', sans-serif;
    }
  `]
})
export class FooterComponent {

}
