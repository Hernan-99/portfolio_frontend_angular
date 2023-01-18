export class Experiencias {
  id?: number;
  puesto: string;
  descripcionPuesto: string;
  imgTrabajo: string;
  fechaInicio: string;
  fechaFin: string;

  constructor(
    puesto: string,
    descripcionPuesto: string,
    imgTrabajo: string,
    fechaInicio: string,
    fechaFin: string
  ) {
    this.puesto = puesto;
    this.descripcionPuesto = descripcionPuesto;
    this.imgTrabajo = imgTrabajo;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
  }
}
