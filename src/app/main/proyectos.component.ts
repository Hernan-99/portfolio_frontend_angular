import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../models/proyectos';
import { ProyectosService } from '../services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  public proyectos: Proyectos[] = [];
  constructor(private proyectosSv: ProyectosService) {}

  ngOnInit(): void {
    this.getProyectos();
  }

  getProyectos(): void {
    this.proyectosSv.getAllProyectos().subscribe({
      next: (data) => {
        this.proyectos = data;
      },
      error: (err) => {
        err;
      },
    });
  }
}
