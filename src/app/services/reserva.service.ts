import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ReservaCliente } from '../models/reservaCliente.model';
import { Propiedad } from '../models/propiedad.model';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private propiedadSubject = new BehaviorSubject<Propiedad | null>(null);
  private reservasSubject = new BehaviorSubject<ReservaCliente[]>([]);

  setPropiedad(propiedad: Propiedad) {
    this.propiedadSubject.next(propiedad);
  }

  getPropiedad() {
    return this.propiedadSubject.asObservable();
  }

  getReservas() {
    return this.reservasSubject.asObservable();
  }

  addReserva(reserva: ReservaCliente) {
    const current = this.reservasSubject.value || [];
    this.reservasSubject.next([...current, reserva]);
  }

  deleteReserva(id: number) {
    const current = this.reservasSubject.value || [];
    const updated = current.filter(r => r.getId() !== id);
    this.reservasSubject.next(updated);
  }
}