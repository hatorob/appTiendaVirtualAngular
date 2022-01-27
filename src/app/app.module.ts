import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

//Rutas
import { APP_ROUTING } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { TelevisoresComponent } from './components/televisores/televisores.component';
import { RopaComponent } from './components/ropa/ropa.component';
import { OrdenadoresComponent } from './components/ordenadores/ordenadores.component';
//services
import { TelevisoresService } from './servicios/televisores.service';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TelevisoresComponent,
    RopaComponent,
    OrdenadoresComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    TelevisoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
