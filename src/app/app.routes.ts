import { Routes } from '@angular/router';
import { ComponentInicioComponent } from './component-inicio/component-inicio.component';
import { ComponentReservasComponent } from './component-reservas/component-reservas.component';
import { FormularioReservaComponent } from './formulario-reserva/formulario-reserva.component';
import { ComponenteBusquedaComponent } from './componente-busqueda/componente-busqueda.component';

export const routes: Routes = [
    {path: '', component:ComponentInicioComponent},
    {path: 'reservas', component:ComponentReservasComponent},
    {path: 'generareserva', component:FormularioReservaComponent},
    {path: 'busqueda', component:ComponenteBusquedaComponent},

];
