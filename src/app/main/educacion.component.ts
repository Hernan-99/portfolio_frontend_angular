import { Component, OnInit } from '@angular/core';
import { Educaciones } from '../models/educaciones';
import { EducacionesService } from '../services/educaciones.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  public educaciones: Educaciones[] = [];

  constructor(private eduSv: EducacionesService) {}

  ngOnInit(): void {
    this.getEdu();
  }

  getEdu(): void {
    this.eduSv.getAllEdu().subscribe({
      next: (data) => {
        this.educaciones = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
