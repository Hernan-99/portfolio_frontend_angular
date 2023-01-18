import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Educaciones } from '../models/educaciones';
import { Experiencias } from '../models/experiencias';
import { ExperienciasService } from '../services/experiencias.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-edit-experiecias-dashboard',
  templateUrl: './edit-experiecias-dashboard.component.html',
  styleUrls: ['./edit-experiecias-dashboard.component.css'],
})
export class EditExperieciasDashboardComponent implements OnInit {
  experiencia: Experiencias = null;

  isLogged = false;
  nombreUsuario = '';
  constructor(
    private tokenSv: TokenService,
    private experieciaSv: ExperienciasService,
    private actRoute: ActivatedRoute,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit(): void {
    const id = this.actRoute.snapshot.params['id'];
    this.experieciaSv.getDetailExp(id).subscribe({
      next: (data) => {
        this.experiencia = data;
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

  onUpdateExp(): void {
    const id = this.actRoute.snapshot.params['id'];
    this.experieciaSv.putExp(id, this.experiencia).subscribe({
      next: (data) => {
        this.toastr.info('Experiencia actualizada', '😎', { timeOut: 3000 });
        this.route.navigate(['/dashboard']);
      },
      error: (err) => {
        this.toastr.error(err.error.mensaje, 'Error', { timeOut: 3000 });
        this.route.navigate(['/dashboard']);
      },
    });
  }
}
