export class HabilidadesBlandas {
  id?: number;
  nombreHabilidad: string;
  iconoHabilidad: string;
  porcentaje: number;
  colorIcono: string;
  colorBarra: string;

  constructor(
    nombreHabilidad: string,
    iconoHabilidad: string,
    porcentaje: number,
    colorIcono: string,
    colorBarra: string
  ) {
    this.nombreHabilidad = nombreHabilidad;
    this.iconoHabilidad = iconoHabilidad;
    this.porcentaje = porcentaje;
    this.colorIcono = colorIcono;
    this.colorBarra = colorBarra;
  }
}
