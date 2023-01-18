import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experiencias } from '../models/experiencias';
import { ExperienciasService } from '../services/experiencias.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-add-exp',
  templateUrl: './add-exp.component.html',
  styleUrls: ['./add-exp.component.css'],
})
export class AddExpComponent implements OnInit {
  public puesto = '';
  public descripcionPuesto = '';
  public imgTrabajo = '';
  public fechaInicio = '';
  public fechaFin = '';

  isLogged = false;
  nombreUsuario = '';

  constructor(
    private tokenSv: TokenService,
    private expSv: ExperienciasService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
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

  onCreateExp() {
    const experiencia = new Experiencias(
      this.puesto,
      this.descripcionPuesto,
      this.imgTrabajo,
      this.fechaInicio,
      this.fechaFin
    );
    this.expSv.postExp(experiencia).subscribe({
      next: (data) => {
        this.toastr.success('Nueva experiencia agregada', '📗', {
          timeOut: 3000,
        });
        this.router.navigate(['/dashboard']);
      },

      error: (err) => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,
        });
        this.router.navigate(['/dashboard']);
      },
    });
  }
}
