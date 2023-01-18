export class Cursos {
  id?: number;
  nombreCurso: string;
  descripcionCurso: string;
  link: string;
  imgCurso: string;

  constructor(
    nombreCurso: string,
    descripcionCurso: string,
    link: string,
    imgCurso: string
  ) {
    this.nombreCurso = nombreCurso;
    this.descripcionCurso = descripcionCurso;
    this.link = link;
    this.imgCurso = imgCurso;
  }
}
