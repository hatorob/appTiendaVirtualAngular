import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RutasService {

    rutas:Rutas[] = [
        {
            nombre: "Home",
            url: "home",
        },
        {
            nombre: "Televisores",
            url: "televisores",
        },
        {
            nombre: "Ropa",
            url: "ropa",
        },
        {
            nombre: "PC Gaming",
            url: "ordenadores",
        },

    ];

    constructor() {
        console.log("Servicios listo para usarse..");
    }

    public getRutas():Rutas[] {
        return this.rutas;
    }

}

export interface Rutas {
    nombre: string,
    url: string    
}