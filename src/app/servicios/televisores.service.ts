import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TelevisoresService {

    private televisores:Televisor[] = [
        {
            marca: "Samsung",
            referencia: "Samsung Crystal",
            img: "assets/img/tv/UN55AU7000KXZL_1.png",
            bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            precio: 4000000,
            caracteristicas: {
                tamano: "75 Pulgadas",
                tecnologia: "Uhd 4k Smart TV"
            }
        },
        {
            marca: "Exclusiv",
            referencia: "Lion Exclusiv",
            img: "assets/img/tv/televisor-exclusiv-smart-tv-led-32-hd-2-7709577513304.jpg",
            bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            precio: 980000,
            caracteristicas: {
                tamano: "32 Pulgadas",
                tecnologia: "LED HD"
            }
        },
        {
            marca: "Samsung",
            referencia: "Samsung Crystal",
            img: "assets/img/tv/UN55AU7000KXZL_1.png",
            bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            precio: 4000000,
            caracteristicas: {
                tamano: "75 Pulgadas",
                tecnologia: "Uhd 4k Smart TV"
            }
        },
        {
            marca: "Exclusiv",
            referencia: "Lion Exclusiv",
            img: "assets/img/tv/televisor-exclusiv-smart-tv-led-32-hd-2-7709577513304.jpg",
            bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            precio: 980.000,
            caracteristicas: {
                tamano: "32 Pulgadas",
                tecnologia: "LED HD"
            }
        },
        {
            marca: "Samsung",
            referencia: "Samsung Crystal",
            img: "assets/img/tv/UN55AU7000KXZL_1.png",
            bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            precio: 4000000,
            caracteristicas: {
                tamano: "75 Pulgadas",
                tecnologia: "Uhd 4k Smart TV"
            }
        }
    ];

    constructor() {
        console.log("Servicios listo para usarse..");
    }

    public getTelevisores():Televisor[] {
        return this.televisores;
    }

}

export interface Televisor {
    marca: string,
    referencia: string,
    img: string,
    bio: string,
    precio: number,
    caracteristicas: {
        tamano: string,
        tecnologia: string
    }
}