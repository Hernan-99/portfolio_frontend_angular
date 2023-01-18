export class Proyectos {
  id?: number;
  titulo: string;
  link: string;
  descripcion: string;

  constructor(titulo: string, link: string, descripcion: string) {
    this.titulo = titulo;
    this.link = link;
    this.descripcion = descripcion;
  }
}
