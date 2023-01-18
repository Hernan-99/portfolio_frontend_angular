import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DatosPersonalesDashboardComponent } from './shared/datos-personales-dashboard.component';
import { AddExpComponent } from './shared/add-exp.component';
import { AddCursosComponent } from './shared/add-cursos.component';
import { AddHbComponent } from './shared/add-hb.component';
import { AddProyectoComponent } from './shared/add-proyecto.component';
import { AddHdComponent } from './shared/add-hd.component';
import { AddEducacionComponent } from './shared/add-educacion.component';
import { EditExperieciasDashboardComponent } from './shared/edit-experiecias-dashboard.component';
import { EditEducacionesDashboardComponent } from './shared/edit-educaciones-dashboard.component';
import { EditCursosDashboardComponent } from './shared/edit-cursos-dashboard.component';
import { EditHBDashboardComponent } from './shared/edit-hbdashboard.component';
import { EditHDDashboardComponent } from './shared/edit-hddashboard.component';
import { EditProyectoDashboardComponent } from './shared/edit-proyecto-dashboard.component';
import { LoginComponent } from './auth/login.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'editar/:id', component: DashboardComponent },
  { path: 'editar/:id', component: DatosPersonalesDashboardComponent },

  { path: 'login', component: LoginComponent },

  { path: 'nueva/experiencia', component: AddExpComponent },
  { path: 'editarexp/:id', component: EditExperieciasDashboardComponent },

  { path: 'nueva/educacion', component: AddEducacionComponent },
  { path: 'editaredu/:id', component: EditEducacionesDashboardComponent },

  { path: 'nuevo/curso', component: AddCursosComponent },
  { path: 'editarcur/:id', component: EditCursosDashboardComponent },

  { path: 'nuevaHabilidadblanda', component: AddHbComponent },
  { path: 'editarhB/:id', component: EditHBDashboardComponent },

  { path: 'nuevaHabilidaddura', component: AddHdComponent },
  { path: 'editarhD/:id', component: EditHDDashboardComponent },

  { path: 'nuevo/proyecto', component: AddProyectoComponent },
  { path: 'editarpro/:id', component: EditProyectoDashboardComponent },

  { path: 'form', component: FormularioComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  // { path: '', redirectTo: '**', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
