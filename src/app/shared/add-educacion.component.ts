import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Educaciones } from '../models/educaciones';
import { EducacionesService } from '../services/educaciones.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css'],
})
export class AddEducacionComponent implements OnInit {
  public institucion = '';
  public titulo = '';
  public imgEdu = '';
  public fechaInicio = '';
  public fechaFin = '';

  isLogged = false;
  nombreUsuario = '';

  constructor(
    private tokenSv: TokenService,
    private eduSv: EducacionesService,
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

  onCreateEducacion(): void {
    const educacion = new Educaciones(
      this.institucion,
      this.titulo,
      this.imgEdu,
      this.fechaInicio,
      this.fechaFin
    );

    this.eduSv.postEdu(educacion).subscribe({
      next: (data) => {
        this.toastr.success('Educacion agregada correctamente', '👍', {
          timeOut: 3000,
        });
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.toastr.error(err.error.mensaje, 'Error al crear la educacion', {
          timeOut: 3000,
        });
        this.router.navigate(['/dashboard']);
      },
    });
  }
}
