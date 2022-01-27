import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TelevisoresService, Televisor } from 'src/app/servicios/televisores.service';


@Component({
  selector: 'app-televisores',
  templateUrl: './televisores.component.html',
  styleUrls: ['./televisores.component.css']
})
export class TelevisoresComponent implements OnInit {

  televisores:Televisor[] = [];

  constructor( private _TelevisoresService: TelevisoresService,
               private router:Router) { }

  ngOnInit(): void {
    this.televisores = this._TelevisoresService.getTelevisores();
  }

}
