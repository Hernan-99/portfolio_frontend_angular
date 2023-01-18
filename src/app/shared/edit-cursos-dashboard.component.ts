import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cursos } from '../models/cursos';
import { CursosService } from '../services/cursos.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-edit-cursos-dashboard',
  templateUrl: './edit-cursos-dashboard.component.html',
  styleUrls: ['./edit-cursos-dashboard.component.css'],
})
export class EditCursosDashboardComponent implements OnInit {
  curso: Cursos = null;

  isLogged = false;
  nombreUsuario = '';
  constructor(
    private tokenSv: TokenService,
    private cursosSv: CursosService,
    private actRoute: ActivatedRoute,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit(): void {
    const id = this.actRoute.snapshot.params['id'];
    this.cursosSv.getDetailCur(id).subscribe({
      next: (data) => {
        this.curso = data;
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

  onUpdateCur(): void {
    const id = this.actRoute.snapshot.params['id'];
    this.cursosSv.putCur(id, this.curso).subscribe({
      next: (data) => {
        this.toastr.info('Curso actualizado', '😎', { timeOut: 3000 });
        this.route.navigate(['/dashboard']);
      },
      error: (err) => {
        this.toastr.error(err.error.mensaje, 'Error', { timeOut: 3000 });
        this.route.navigate(['/dashboard']);
      },
    });
  }
}
