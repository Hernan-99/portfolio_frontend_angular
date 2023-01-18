import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HabilidadesDuras } from '../models/habilidades-duras';
import { HabilidadesDurasService } from '../services/habilidades-duras.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-add-hd',
  templateUrl: './add-hd.component.html',
  styleUrls: ['./add-hd.component.css'],
})
export class AddHdComponent implements OnInit {
  nombreTecnologia = '';
  iconoTecnologia = '';
  porcentaje = null;
  colorIcono = '';
  colorBarra = '';

  isLogged = false;
  nombreUsuario = '';
  constructor(
    private tokenSv: TokenService,
    private habDuras: HabilidadesDurasService,
    private router: Router,
    private toastr: ToastrService
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

  crearHd(): void {
    const habilidadD = new HabilidadesDuras(
      this.nombreTecnologia,
      this.iconoTecnologia,
      this.porcentaje,
      this.colorIcono,
      this.colorBarra
    );

    this.habDuras.postHD(habilidadD).subscribe({
      next: (data) => {
        this.toastr.success('Habilidad creada', 'OK', { timeOut: 3000 });
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.toastr.error(err.error.mensaje, 'Error', { timeOut: 3000 });
        this.router.navigate(['/dashboard']);
      },
    });
  }
}
