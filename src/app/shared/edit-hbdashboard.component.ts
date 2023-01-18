import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HabilidadesBlandas } from '../models/habilidades-blandas';
import { HabilidadesBlandasService } from '../services/habilidades-blandas.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-edit-hbdashboard',
  templateUrl: './edit-hbdashboard.component.html',
  styleUrls: ['./edit-hbdashboard.component.css'],
})
export class EditHBDashboardComponent implements OnInit {
  habilidadB: HabilidadesBlandas = null;

  isLogged = false;
  nombreUsuario = '';
  constructor(
    private tokenSv: TokenService,
    private hBSv: HabilidadesBlandasService,
    private actRoute: ActivatedRoute,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit(): void {
    const id = this.actRoute.snapshot.params['id'];
    this.hBSv.getDetailHB(id).subscribe({
      next: (data) => {
        this.habilidadB = data;
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

  onUpdateHabilidadBlanda(): void {
    const id = this.actRoute.snapshot.params['id'];
    this.hBSv.putHB(id, this.habilidadB).subscribe({
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
