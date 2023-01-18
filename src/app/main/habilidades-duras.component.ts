import { Component, OnInit } from '@angular/core';
import { HabilidadesDuras } from '../models/habilidades-duras';
import { HabilidadesDurasService } from '../services/habilidades-duras.service';

@Component({
  selector: 'app-habilidades-duras',
  templateUrl: './habilidades-duras.component.html',
  styleUrls: ['./habilidades-duras.component.css'],
})
export class HabilidadesDurasComponent implements OnInit {
  public habilidadesD: HabilidadesDuras[] = [];

  constructor(private habilidadSv: HabilidadesDurasService) {}

  ngOnInit(): void {
    this.getHD();
  }

  getHD(): void {
    this.habilidadSv.getAllHD().subscribe({
      next: (data) => {
        this.habilidadesD = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
