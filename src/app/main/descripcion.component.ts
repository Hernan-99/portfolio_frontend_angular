import { Component, OnInit } from '@angular/core';
import { Personas } from '../models/personas';
import { PersonaService } from '../services/personas.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css'],
})
export class DescripcionComponent implements OnInit {
  public persona: Personas | undefined;
  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(): void {
    this.personaService.getDatos().subscribe({
      next: (data) => {
        this.persona = data;
      },
      error: (err) => {
        alert(err);
      },
    });
  }
}
