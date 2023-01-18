import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cursos } from '../models/cursos';
import { Educaciones } from '../models/educaciones';
import { Experiencias } from '../models/experiencias';
import { HabilidadesBlandas } from '../models/habilidades-blandas';
import { HabilidadesDuras } from '../models/habilidades-duras';
import { Personas } from '../models/personas';
import { Proyectos } from '../models/proyectos';
import { CursosService } from '../services/cursos.service';
import { EducacionesService } from '../services/educaciones.service';
import { ExperienciasService } from '../services/experiencias.service';
import { HabilidadesBlandasService } from '../services/habilidades-blandas.service';
import { HabilidadesDurasService } from '../services/habilidades-duras.service';
import { PersonaService } from '../services/personas.service';
import { ProyectosService } from '../services/proyectos.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css'],
})
export class MainDashboardComponent implements OnInit {
  public persona: Personas | undefined;
  public experiencias: Experiencias[] = [];
  public educaciones: Educaciones[] = [];
  public cursos: Cursos[] = [];
  public habilidadesB: HabilidadesBlandas[] = [];
  public habilidadesD: HabilidadesDuras[] = [];
  public proyectos: Proyectos[] = [];

  //---------------
  isLogged = false;
  nombreUsuario = '';

  constructor(
    private personaService: PersonaService,
    private expSv: ExperienciasService,
    private eduSv: EducacionesService,
    private cursosSv: CursosService,
    private habilidadesBSv: HabilidadesBlandasService,
    private habilidadesDSv: HabilidadesDurasService,
    private proyectosSv: ProyectosService,
    private toastr: ToastrService,
    private tokenSv: TokenService
  ) {}

  ngOnInit(): void {
    this.getDatosPers();
    this.getExp();
    this.getEdu();
    this.getCursos();
    this.getHabilidadesB();
    this.getHabilidadesD();
    this.getProyectos();
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

  /*
  ==========================================
                  METODOS GET 
  ==========================================
  */
  getDatosPers(): void {
    this.personaService.getDatos().subscribe({
      next: (data) => {
        this.persona = data;
      },
      error: (err) => {
        alert(err);
      },
    });
  }

  getExp(): void {
    this.expSv.getAllExp().subscribe({
      next: (data) => {
        this.experiencias = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getEdu(): void {
    this.eduSv.getAllEdu().subscribe({
      next: (data) => {
        this.educaciones = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getCursos(): void {
    this.cursosSv.getAllCur().subscribe({
      next: (data) => {
        this.cursos = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getHabilidadesB(): void {
    this.habilidadesBSv.getAllHB().subscribe({
      next: (data) => {
        this.habilidadesB = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getHabilidadesD(): void {
    this.habilidadesDSv.getAllHD().subscribe({
      next: (data) => {
        this.habilidadesD = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getProyectos(): void {
    this.proyectosSv.getAllProyectos().subscribe({
      next: (data) => {
        this.proyectos = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  /*
  ==========================================
                METODOS DELETE 
  ==========================================
  */
  deleteExp(id: number): void {
    this.expSv.delExp(id).subscribe({
      next: (data) => {
        this.toastr.success('Experiencia eliminada', '👍', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.getExp();
      },
      error: (err) => {
        this.toastr.error(err.error.mensaje, '👎', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
      },
    });
  }

  deleteEdu(id: number): void {
    this.eduSv.delEdu(id).subscribe({
      next: (data) => {
        this.toastr.success('Experiencia eliminada', '👍', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.getEdu();
      },
      error: (err) => {
        this.toastr.error(err.error.mensaje, '👎', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
      },
    });
  }

  deleteCurso(id: number): void {
    this.cursosSv.delCur(id).subscribe({
      next: (data) => {
        this.toastr.success('Curso eliminado', '👍', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.getCursos();
      },
      error: (err) => {
        this.toastr.error(err.error.mensaje, '👎', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
      },
    });
  }

  deleteHB(id: number): void {
    this.habilidadesBSv.delHB(id).subscribe({
      next: (data) => {
        this.toastr.success('Habilidad eliminada', '👍', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.getHabilidadesB();
      },
      error: (err) => {
        this.toastr.error(err.error.mensaje, '👎', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
      },
    });
  }

  deleteHD(id: number): void {
    this.habilidadesDSv.delHD(id).subscribe({
      next: (data) => {
        this.toastr.success('Habilidad eliminada', '👍', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.getHabilidadesD();
      },
      error: (err) => {
        this.toastr.error(err.error.mensaje, '👎', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
      },
    });
  }

  deleteProyecto(id: number): void {
    this.proyectosSv.delProyectos(id).subscribe({
      next: (data) => {
        this.toastr.success('Proyecto eliminado', '👍', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.getProyectos();
      },
      error: (err) => {
        this.toastr.error(err.error.mensaje, '👎', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
      },
    });
  }
}
