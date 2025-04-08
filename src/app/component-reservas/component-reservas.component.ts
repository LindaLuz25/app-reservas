import { Component, OnInit } from '@angular/core';
import { ReservaCliente } from '../models/reservaCliente.model';
import { Propiedad } from '../models/propiedad.model';
import { CommonModule } from '@angular/common';
import { ReservaService } from '../services/reserva.service';

@Component({
  selector: 'app-component-reservas',
  imports: [CommonModule],
  templateUrl: './component-reservas.component.html',
  styleUrl: './component-reservas.component.css'
})
export class ComponentReservasComponent implements OnInit{
  

  reservas:ReservaCliente[] = []

  constructor(private reservaService:ReservaService){}

  ngOnInit(): void {
    this.reservaService.getReservas().subscribe((res: ReservaCliente[]) => {
      if (res) {
        this.reservas =res

      }
    });
  }
  eliminarReserva(id: number) {
    this.reservaService.deleteReserva(id);
  }

}