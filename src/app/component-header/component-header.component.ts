import { Component} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BusquedaService } from '../services/busqueda.service';

@Component({
  selector: 'app-component-header',
  imports: [RouterModule],
  templateUrl: './component-header.component.html',
  styleUrl: './component-header.component.css'
})
export class ComponentHeaderComponent {
  constructor(
    private busquedaService: BusquedaService,
    private router: Router
  ) { }

  buscar(input: HTMLInputElement, event?: Event) {
    if (event) event.preventDefault();
    const valor = input.value.trim();
    if (valor) {
      this.busquedaService.actualizarBusqueda(valor);
      this.router.navigate(['/busqueda']);
    }
  }
}
