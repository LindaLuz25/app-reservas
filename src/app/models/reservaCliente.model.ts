import { Propiedad } from "./propiedad.model";

export class ReservaCliente {
    constructor(
        public propiedad: Propiedad,
        public nombreCliente: string,
        public fecha: string,
        public hora: string
    ) { }

    public getId(): any {
        return this.propiedad.id
    }

    public getPropiedad(): Propiedad {
        return this.propiedad;
    }

    public getNombreCliente(): string {
        return this.nombreCliente;
    }

    public getFecha(): string {
        return this.fecha;
    }

    public getHora(): string {
        return this.hora;
    }
}