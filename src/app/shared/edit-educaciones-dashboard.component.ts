import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Educaciones } from '../models/educaciones';
import { EducacionesService } from '../services/educaciones.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-edit-educaciones-dashboard',
  templateUrl: './edit-educaciones-dashboard.component.html',
  styleUrls: ['./edit-educaciones-dashboard.component.css'],
})
export class EditEducacionesDashboardComponent implements OnInit {
  educacion: Educaciones = null;

  isLogged = false;
  nombreUsuario = '';

  constructor(
    private tokenSv: TokenService,
    private educacionesSv: EducacionesService,
    private actRoute: ActivatedRoute,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit(): void {
    const id = this.actRoute.snapshot.params['id'];
    this.educacionesSv.getDetailEdu(id).subscribe({
      next: (data) => {
        this.educacion = data;
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

  onUpdateEdu(): void {
    const id = this.actRoute.snapshot.params['id'];
    this.educacionesSv.putEdu(id, this.educacion).subscribe({
      next: (data) => {
        this.toastr.info('Educacion actualizada', '😎', { timeOut: 3000 });
        this.route.navigate(['/dashboard']);
      },
      error: (err) => {
        this.toastr.error(err.error.mensaje, 'Error', { timeOut: 3000 });
        this.route.navigate(['/dashboard']);
      },
    });
  }
}
