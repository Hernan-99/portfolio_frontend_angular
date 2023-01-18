export class Educaciones {
  id?: number;
  institucion: string;
  titulo: string;
  imgEdu: string;
  fechaInicio: string;
  fechaFin: string;

  constructor(
    institucion: string,
    titulo: string,
    imgEdu: string,
    fechaInicio: string,
    fechaFin: string
  ) {
    this.institucion = institucion;
    this.titulo = titulo;
    this.imgEdu = imgEdu;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
  }
}
