import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Personas } from '../models/personas';
import { PersonaService } from '../services/personas.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-datos-personales-dashboard',
  templateUrl: './datos-personales-dashboard.component.html',
  styleUrls: ['./datos-personales-dashboard.component.css'],
})
export class DatosPersonalesDashboardComponent implements OnInit {
  persona: Personas = null;

  isLogged = false;
  nombreUsuario = '';
  constructor(
    private tokenSv: TokenService,
    private personaSv: PersonaService,
    private toastrSv: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = 1;
    this.personaSv.detail(id).subscribe({
      next: (data) => {
        this.persona = data;
      },
      error: (err) => {
        this.toastrSv.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.router.navigate(['/dashboard']);
      },
    });
    this.validacionLogin();
  }

  public validacionLogin(): void {
    if (this.tokenSv.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenSv.getUserName();
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }
  }

  onUpdate(): void {
    const id = 1;
    this.personaSv.update(id, this.persona).subscribe({
      next: (data) => {
        this.toastrSv.info('Perfil Actualizado', '😎', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.toastrSv.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/dashboard']);
      },
    });
  }
}
