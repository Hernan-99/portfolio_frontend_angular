import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HabilidadesDuras } from '../models/habilidades-duras';
import { HabilidadesDurasService } from '../services/habilidades-duras.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-edit-hddashboard',
  templateUrl: './edit-hddashboard.component.html',
  styleUrls: ['./edit-hddashboard.component.css'],
})
export class EditHDDashboardComponent implements OnInit {
  habilidadD: HabilidadesDuras = null;

  isLogged = false;
  nombreUsuario = '';

  constructor(
    private tokenSv: TokenService,
    private hdSv: HabilidadesDurasService,
    private actRoute: ActivatedRoute,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit(): void {
    const id = this.actRoute.snapshot.params['id'];
    this.hdSv.getDetailHD(id).subscribe({
      next: (data) => {
        this.habilidadD = data;
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

  onUpdateHabilidadDura(): void {
    const id = this.actRoute.snapshot.params['id'];
    this.hdSv.putHD(id, this.habilidadD).subscribe({
      next: (data) => {
        this.toastr.info('Habilidad actualizada', '😎', { timeOut: 3000 });
        this.route.navigate(['/dashboard']);
      },
      error: (err) => {
        this.toastr.error(err.error.mensaje, 'Error', { timeOut: 3000 });
        this.route.navigate(['/dashboard']);
      },
    });
  }
}
