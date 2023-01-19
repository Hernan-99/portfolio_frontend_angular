import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { MainComponent } from './main/main.component';
import { HeroComponent } from './main/hero.component';
import { AboutMeComponent } from './main/about-me.component';
import { FotoPerfilComponent } from './main/foto-perfil.component';
import { DescripcionComponent } from './main/descripcion.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainDashboardComponent } from './dashboard/main-dashboard.component';
import { FormularioComponent } from './formulario/formulario.component';

import { ExperienciaComponent } from './main/experiencia.component';
import { EducacionComponent } from './main/educacion.component';
import { CursosComponent } from './main/cursos.component';
import { HabilidadesBlandasComponent } from './main/habilidades-blandas.component';
import { HabilidadesDurasComponent } from './main/habilidades-duras.component';
import { HabilidadesComponent } from './main/habilidades/habilidades.component';
import { ProyectosComponent } from './main/proyectos.component';
import { DatosPersonalesDashboardComponent } from './shared/datos-personales-dashboard.component';
import { AddExpComponent } from './shared/add-exp.component';
import { AddCursosComponent } from './shared/add-cursos.component';
import { AddHbComponent } from './shared/add-hb.component';
import { AddHdComponent } from './shared/add-hd.component';
import { AddProyectoComponent } from './shared/add-proyecto.component';
import { AddEducacionComponent } from './shared/add-educacion.component';
import { EditExperieciasDashboardComponent } from './shared/edit-experiecias-dashboard.component';
import { EditEducacionesDashboardComponent } from './shared/edit-educaciones-dashboard.component';
import { EditCursosDashboardComponent } from './shared/edit-cursos-dashboard.component';
import { EditHBDashboardComponent } from './shared/edit-hbdashboard.component';
import { EditHDDashboardComponent } from './shared/edit-hddashboard.component';
import { EditProyectoDashboardComponent } from './shared/edit-proyecto-dashboard.component';
import { LoginComponent } from './auth/login.component';
import { CvComponent } from './main/cv.component';
import { ErrorComponent } from './shared/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HeroComponent,
    AboutMeComponent,
    FotoPerfilComponent,
    DescripcionComponent,
    FooterComponent,
    IndexComponent,
    DashboardComponent,
    MainDashboardComponent,
    FormularioComponent,

    ExperienciaComponent,
    EducacionComponent,
    CursosComponent,
    HabilidadesBlandasComponent,
    HabilidadesDurasComponent,
    HabilidadesComponent,
    ProyectosComponent,
    DatosPersonalesDashboardComponent,
    AddExpComponent,
    AddCursosComponent,
    AddHbComponent,
    AddHdComponent,
    AddProyectoComponent,
    AddEducacionComponent,
    EditExperieciasDashboardComponent,
    EditEducacionesDashboardComponent,
    EditCursosDashboardComponent,
    EditHBDashboardComponent,
    EditHDDashboardComponent,
    EditProyectoDashboardComponent,
    LoginComponent,
    CvComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
