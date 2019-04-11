import { Component, OnInit } from '@angular/core';

import { Mascota } from '../_models/index';
import { MascotaService } from '../_services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mascota-frontend';
  mascotas: Mascota[];

  constructor(
    private _mascotaService: MascotaService
  ) {}

  ngOnInit() {
    this.getMascotas();
  }

  getMascotas() {
    this._mascotaService.getAll().subscribe(
      data => {
        console.log(data);
        this.mascotas = data;
      }
    )
  }


}
