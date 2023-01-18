import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proyectos } from '../models/proyectos';
import { ProyectosService } from '../services/proyectos.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css'],
})
export class AddProyectoComponent implements OnInit {
  titulo = '';
  link = '';
  descripcion = '';

  isLogged = false;
  nombreUsuario = '';

  constructor(
    private tokenSv: TokenService,
    private toastr: ToastrService,
    private router: Router,
    private proyectoSv: ProyectosService
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

  onCreate(): void {
    const proyecto = new Proyectos(this.titulo, this.link, this.descripcion);
    this.proyectoSv.postProyectos(proyecto).subscribe({
      next: (data) => {
        this.toastr.success('Proyecto agregado', 'OK', {
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
