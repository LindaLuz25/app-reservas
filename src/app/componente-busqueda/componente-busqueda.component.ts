import { Component } from '@angular/core';
import { ReservaCliente } from '../models/reservaCliente.model';
import { ReservaService } from '../services/reserva.service';
import { BusquedaService } from '../services/busqueda.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente-busqueda',
  imports: [CommonModule],
  templateUrl: './componente-busqueda.component.html',
  styleUrl: './componente-busqueda.component.css'
})
export class ComponenteBusquedaComponent {
busqueda: string = '';
  reservas: ReservaCliente[] = [];
  reservasFiltradas: ReservaCliente[] = [];

  constructor(
    private reservasService: ReservaService,
    private busquedaService: BusquedaService
  ) {}

  ngOnInit(): void {
    this.reservasService.getReservas().subscribe((data: ReservaCliente[]) => {
      this.reservas = data;
      this.filtrarReservas();
    });

    this.busquedaService.terminoBusqueda$.subscribe((valor) => {
      this.busqueda = valor;
      this.filtrarReservas();
    });
  }

  filtrarReservas(): void {
    const texto = this.busqueda.toLowerCase();
    this.reservasFiltradas = this.reservas.filter(reserva =>
      reserva.nombreCliente?.toLowerCase().includes(texto) ||
      reserva.hora?.toLowerCase().includes(texto) ||
      reserva.fecha?.toLowerCase().includes(texto) ||
      reserva.propiedad?.descripcion?.toLowerCase().includes(texto) ||
      reserva.propiedad?.infoPropiedad?.toLowerCase().includes(texto) ||
      reserva.propiedad?.nombrePropiedad?.toLowerCase().includes(texto)
    );
  }
}
