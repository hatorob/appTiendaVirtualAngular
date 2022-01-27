import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ModalComponent } from "./components/modal/modal.component";
import { OrdenadoresComponent } from "./components/ordenadores/ordenadores.component";
import { RopaComponent } from "./components/ropa/ropa.component";
import { TelevisoresComponent } from "./components/televisores/televisores.component";

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'televisores', component: TelevisoresComponent},
    { path: 'ordenadores', component: OrdenadoresComponent},
    { path: 'ropa', component: RopaComponent},
    { path: 'modal', component: ModalComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


