import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Experiencias } from '../models/experiencias';
import { ExperienciasService } from '../services/experiencias.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  public experiencias: Experiencias[] = [];

  constructor(private expSv: ExperienciasService) {}

  ngOnInit(): void {
    this.getExp();
  }

  getExp(): void {
    this.expSv.getAllExp().subscribe({
      next: (data) => {
        this.experiencias = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
