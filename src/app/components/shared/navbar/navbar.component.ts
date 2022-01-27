import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RutasService, Rutas } from 'src/app/servicios/rutas.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  rutas: Rutas[] = [];

  constructor(private _Rutas: RutasService,
              private router:Router) { }

  ngOnInit(): void {
    this.rutas = this._Rutas.getRutas();
  }

}
