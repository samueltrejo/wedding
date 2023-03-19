import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar.component';
import { HomeComponent } from './components/home.component';
import { RegistryComponent } from './components/registry.component';
import { OurstoryComponent } from './components/ourstory.component';
import { FooterComponent } from './components/footer.component';
import { WhenandwhereComponent } from './components/whenandwhere.component';
import { GalleryComponent } from './components/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegistryComponent,
    OurstoryComponent,
    FooterComponent,
    WhenandwhereComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
