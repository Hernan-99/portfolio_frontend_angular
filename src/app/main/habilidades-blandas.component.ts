import { Component, OnInit } from '@angular/core';
import { HabilidadesBlandas } from '../models/habilidades-blandas';
import { HabilidadesBlandasService } from '../services/habilidades-blandas.service';

@Component({
  selector: 'app-habilidades-blandas',
  templateUrl: './habilidades-blandas.component.html',
  styleUrls: ['./habilidades-blandas.component.css'],
})
export class HabilidadesBlandasComponent implements OnInit {
  public habilidadesB: HabilidadesBlandas[] = [];

  constructor(private habilidadSv: HabilidadesBlandasService) {}

  ngOnInit(): void {
    this.getHab();
  }

  getHab(): void {
    this.habilidadSv.getAllHB().subscribe({
      next: (data) => {
        this.habilidadesB = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
