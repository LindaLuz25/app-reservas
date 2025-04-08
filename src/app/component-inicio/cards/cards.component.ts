import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Propiedad } from '../../models/propiedad.model';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-cards',
  imports: [RouterModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Output() lugarSeleccionado = new EventEmitter<Propiedad>();
  countrys: any[] = [];
  images: string[] = [
    'img/lugares/lugar1.avif',
    'img/lugares/lugar2.avif',
    'img/lugares/lugar3.avif',
    'img/lugares/lugar4.webp',
    'img/lugares/lugar5.avif',
    'img/lugares/lugar6.avif',
    'img/lugares/lugar7.avif',
    'img/lugares/lugar8.avif',
    'img/lugares/lugar9.avif',
    'img/lugares/lugar10.avif',
    'img/lugares/lugar11.avif',
    'img/lugares/lugar12.avif',
    'img/lugares/lugar13.avif',
    'img/lugares/lugar14.avif',
    'img/lugares/lugar15.avif',
    'img/lugares/lugar16.avif',
    'img/lugares/lugar17.webp',
  ]

  descripcion: string[] = [
    '🌅 ¡Escapa a un paraíso natural! Reserva tu lugar hoy y disfruta de vistas increíbles y comodidad. ¡Te esperamos!',
    '🏖️ Relájate en un ambiente único. Reserva ahora y aprovecha nuestras ofertas especiales. ¡No te lo pierdas!',
    '🌟 Vive la experiencia de tu vida en el mejor destino. Reserva ya y asegura tu lugar en este increíble sitio.',
    '🏡 Un lugar perfecto para desconectar y relajarte. ¡Haz tu reserva y prepárate para un descanso inolvidable!',
    '🏞️ Sumérgete en la belleza de la naturaleza. Reserva ahora y disfruta de un lugar exclusivo para ti.',
    '✨ ¡Tu próxima aventura te espera! Reserva tu estancia en un lugar que te encantará. ¡Hazlo hoy!',
    '🌴 Escápate a un rincón paradisíaco. Reserva tu espacio y vive momentos de pura tranquilidad.',
    '🏙️ Si buscas comodidad y estilo, este es el lugar ideal. Reserva ahora y comienza a planear tu escape.',
    '🌊 Relájate, respira y disfruta de lo mejor. Reserva tu estancia y vive el descanso que mereces.',
    '🏞️ Conoce el destino que siempre soñaste. ¡Haz tu reserva y empieza a crear recuerdos especiales hoy mismo!'

  ]
  getRandomDescription() {
    const randomIndex = Math.floor(Math.random() * this.descripcion.length);
    return this.descripcion[randomIndex];
  }

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.getCountries().subscribe((data: any[]) => {
      this.countrys = data.map(country => ({
        id: country.id,
        ...country,

        imagen: this.getRandomImage(),
        descripcion: this.getRandomDescription()
      }));
    });
  }
  getRandomImage() {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    return this.images[randomIndex];
  }


  seleccionarLugar(id: any, imagen: string, nombre: string, info: string, descripcion: string) {
    const newReserva = new Propiedad(Date.now(), imagen, nombre, info, descripcion);
    this.lugarSeleccionado.emit(newReserva);
  }

}
