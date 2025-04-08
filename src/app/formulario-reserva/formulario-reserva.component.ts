import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReservaCliente } from '../models/reservaCliente.model';
import { Propiedad } from '../models/propiedad.model';
import { ReservaService } from '../services/reserva.service';

@Component({
  selector: 'app-formulario-reserva',
  imports: [RouterModule, FormsModule],
  templateUrl: './formulario-reserva.component.html',
  styleUrl: './formulario-reserva.component.css'
})
export class FormularioReservaComponent implements OnInit {

  constructor(private reservaService: ReservaService) { }

  
    reservaForm = {
      nombre: "",
      fecha: "",
      hora: ""
    };
  
    
    propiedad: Propiedad = new Propiedad(0, '', '', '', '');  
    ngOnInit(): void {
      this.reservaService.getPropiedad().subscribe((prop: Propiedad | null) => {
        if (prop) {
          this.propiedad = prop
        } else {
          console.log('No se ha encontrado ninguna reserva');
        }
      });
    }

    recibirReserva() {
      const newReserva = new ReservaCliente(this.propiedad,this.reservaForm.nombre,this.reservaForm.fecha,this.reservaForm.hora)
      this.reservaService.addReserva(newReserva);
    }
  
  
  }