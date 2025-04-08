
export class Propiedad {
    constructor(public id:any,public imagen:string, public nombrePropiedad:string, public infoPropiedad:string, public descripcion:string) {
        this.id = id;
        this.imagen = imagen;
        this.nombrePropiedad = nombrePropiedad;
        this.infoPropiedad = infoPropiedad;
        this.descripcion = descripcion;
    }

    public getId():any{
        return this.id;
    }

    public getImagen(): string {
        return this.imagen;
    }

    public getNombrePropiedad(): string {
        return this.nombrePropiedad;
    }

    public getInfoPropiedad(): string {
        return this.infoPropiedad;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }

    public setNombrePropiedad(nombrePropiedad: string): void {
        this.nombrePropiedad = nombrePropiedad;
    }

    public setInfoPropiedad(infoPropiedad: string): void {
        this.infoPropiedad = infoPropiedad;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    public setId(id:any):void{
        this.id = id;
    }

}