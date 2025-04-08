import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentHeaderComponent } from "./component-header/component-header.component";
import { ComponentFooterComponent } from "./component-footer/component-footer.component";
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es'
registerLocaleData(localeEs,'es')
@Component({
  selector: 'app-root',
  imports: [ComponentHeaderComponent, RouterOutlet, ComponentFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[{provide:LOCALE_ID,useValue:'es'}]
})
export class AppComponent {
  title = 'app-reserva';
}
