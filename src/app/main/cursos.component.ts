import { Component, OnInit } from '@angular/core';
import { Cursos } from '../models/cursos';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  public cursos: Cursos[] = [];

  constructor(private cursoSv: CursosService) {}

  ngOnInit(): void {
    this.getCur();
  }
  getCur(): void {
    this.cursoSv.getAllCur().subscribe({
      next: (data) => {
        this.cursos = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
