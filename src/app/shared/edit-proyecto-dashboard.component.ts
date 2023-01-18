import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proyectos } from '../models/proyectos';
import { ProyectosService } from '../services/proyectos.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-edit-proyecto-dashboard',
  templateUrl: './edit-proyecto-dashboard.component.html',
  styleUrls: ['./edit-proyecto-dashboard.component.css'],
})
export class EditProyectoDashboardComponent implements OnInit {
  proyecto: Proyectos = null;

  isLogged = false;
  nombreUsuario = '';

  constructor(
    private tokenSv: TokenService,
    private proyectosSv: ProyectosService,
    private actRoute: ActivatedRoute,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit(): void {
    const id = this.actRoute.snapshot.params['id'];
    this.proyectosSv.getDetailsProyectos(id).subscribe({
      next: (data) => {
        this.proyecto = data;
      },
      error: (err) => {
        this.toastr.error(err.error.mensaje, 'Error', { timeOut: 3000 });
        this.route.navigate(['/dashboard']);
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

  onUpdateProyecto(): void {
    const id = this.actRoute.snapshot.params['id'];
    this.proyectosSv.putProyectos(id, this.proyecto).subscribe({
      next: (data) => {
        this.toastr.info('Proyecto actualizado', '😎', { timeOut: 3000 });
        this.route.navigate(['/dashboard']);
      },
      error: (err) => {
        this.toastr.error(err.error.mensaje, 'Error', { timeOut: 3000 });
        this.route.navigate(['/dashboard']);
      },
    });
  }
}
