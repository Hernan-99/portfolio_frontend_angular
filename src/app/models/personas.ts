export class Personas {
  id?: number;
  nombre: string;
  apellido: string;
  stack: string;
  descripcion: string;
  banner: string;
  imgPerfil: string;
  cv: string;

  constructor(
    nombre: string,
    apellido: string,
    stack: string,
    descripcion: string,
    banner: string,
    imgPerfil: string,
    cv: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.stack = stack;
    this.descripcion = descripcion;
    this.banner = banner;
    this.imgPerfil = imgPerfil;
    this.cv = cv;
  }
}
