import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <!-- <a class="navbar-brand" href="#">Samuel y Veronica</a> -->
    <div class="wedding-logo d-inline-flex align-items-center mb-2 text-body-secondary text-decoration-none" href="/" aria-label="Bootstrap"></div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#home">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#ourstory">OUR STORY</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#gallery">PICTURES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#whenandwhere">WHEN AND WHERE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#registry">REGISTRY</a>
        </li>
      </ul>
      <!-- <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>
  </div>
</nav>
  `,
  styles: [`
    .navbar {
      background-color: #a19496!important;
    }
    .navbar-brand {
      font-family: 'Dancing Script', cursive;
      font-size: 2rem;
    }
    a {
      font-family: 'Work Sans', sans-serif;
      font-size: .9rem;
    }
    .wedding-logo {
      height: 65px;
      width: 200px;
      background-image: url('../../assets/wedding_logo.svg')!important;
      background-position: top;
      background-repeat: no-repeat;
      background-size: cover;
    }
  `]
})
export class NavbarComponent {

}
