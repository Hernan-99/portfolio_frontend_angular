import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Personas } from '../models/personas';
import { PersonaService } from '../services/personas.service';

@Component({
  selector: 'app-foto-perfil',
  templateUrl: './foto-perfil.component.html',
  styleUrls: ['./foto-perfil.component.css'],
})
export class FotoPerfilComponent implements OnInit {
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
