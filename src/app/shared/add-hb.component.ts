import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HabilidadesBlandas } from '../models/habilidades-blandas';
import { HabilidadesBlandasService } from '../services/habilidades-blandas.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-add-hb',
  templateUrl: './add-hb.component.html',
  styleUrls: ['./add-hb.component.css'],
})
export class AddHbComponent implements OnInit {
  public nombreHabilidad = '';
  public iconoHabilidad = '';
  public porcentaje = null;
  public colorIcono = '';
  public colorBarra = '';

  isLogged = false;
  nombreUsuario = '';
  constructor(
    private tokenSv: TokenService,
    private habilidadBSv: HabilidadesBlandasService,
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

  onCreateHabilidad() {
    const habilidadBlanda = new HabilidadesBlandas(
      this.nombreHabilidad,
      this.iconoHabilidad,
      this.porcentaje,
      this.colorIcono,
      this.colorBarra
    );
    this.habilidadBSv.postHB(habilidadBlanda).subscribe({
      next: (data) => {
        this.toastr.success('Nueva habilidad agregada', '📗', {
          timeOut: 3000,
        });
        this.router.navigate(['/dashboard']);
      },

      error: (err) => {
        this.toastr.error(err.error.mensaje, 'error', {
          timeOut: 3000,
        });
        this.router.navigate(['/dashboard']);
      },
    });
  }
}
