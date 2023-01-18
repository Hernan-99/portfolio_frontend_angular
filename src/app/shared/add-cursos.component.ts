import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cursos } from '../models/cursos';
import { CursosService } from '../services/cursos.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-add-cursos',
  templateUrl: './add-cursos.component.html',
  styleUrls: ['./add-cursos.component.css'],
})
export class AddCursosComponent implements OnInit {
  public nombreCurso = '';
  public descripcionCurso = '';
  public link = '';
  public imgCurso = '';

  isLogged = false;
  nombreUsuario = '';
  constructor(
    private tokenSv: TokenService,
    private cursosSv: CursosService,
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
  onCreateCurso() {
    const curso = new Cursos(
      this.nombreCurso,
      this.descripcionCurso,
      this.link,
      this.imgCurso
    );
    this.cursosSv.postCur(curso).subscribe({
      next: (data) => {
        this.toastr.success('Nuevo curso agregado', '📗', {
          timeOut: 3000,
        });
        this.router.navigate(['/dashboard']);
      },

      error: (err) => {
        this.toastr.error(err.error.mensaje, '❌', {
          timeOut: 3000,
        });
        this.router.navigate(['/dashboard']);
      },
    });
  }
}
