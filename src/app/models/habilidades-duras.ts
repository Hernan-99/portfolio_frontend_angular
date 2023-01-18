export class HabilidadesDuras {
  id?: number;
  nombreTecnologia: string;
  iconoTecnologia: string;
  porcentaje: number;
  colorIcono: string;
  colorBarra: string;

  constructor(
    nombreTecnologia: string,
    iconoTecnologia: string,
    porcentaje: number,
    colorIcono: string,
    colorBarra: string
  ) {
    this.nombreTecnologia = nombreTecnologia;
    this.iconoTecnologia = iconoTecnologia;
    this.porcentaje = porcentaje;
    this.colorIcono = colorIcono;
    this.colorBarra = colorBarra;
  }
}
