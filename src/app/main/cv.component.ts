import { DOCUMENT } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Personas } from '../models/personas';
import { PersonaService } from '../services/personas.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  personaCv: Personas | undefined;
  cvDescarga?: boolean; //necesario para la funcion
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private cv: PersonaService
  ) {}

  ngOnInit(): void {
    this.getPersona();
  }

  public getPersona(): void {
    //llamamos al metodo por el servicio
    this.cv.getDatos().subscribe({
      next: (rta: Personas) => {
        this.personaCv = rta;
      },
      error: (err: HttpErrorResponse) => {
        alert(err.message);
      },
    });
  }

  //funcion de ocultar icono cv
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 100
    ) {
      this.cvDescarga = true;
      // console.log(this.cvDescarga);
    } else if (
      (this.cvDescarga && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      this.document.body.scrollTop < 50
    ) {
      this.cvDescarga = false;
    }
  }
}
