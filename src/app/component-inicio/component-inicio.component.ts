import { Component } from '@angular/core';
import { CardsComponent } from "./cards/cards.component";
import { CarruselComponent } from "./carrusel/carrusel.component";
import { RouterModule } from '@angular/router';

import { Propiedad } from '../models/propiedad.model';
import { ReservaService } from '../services/reserva.service';

@Component({
  selector: 'app-component-inicio',
  imports: [CardsComponent, CarruselComponent,RouterModule],
  templateUrl: './component-inicio.component.html',
  styleUrl: './component-inicio.component.css'
})
export class ComponentInicioComponent {
  constructor(private reservaService: ReservaService) {}

  recibirPropiedad(propiedad: Propiedad) {
    this.reservaService.setPropiedad(propiedad);
  }
}
