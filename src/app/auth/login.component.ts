import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from '../models/login-usuario';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

//validacion de formularios
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLoginFail = false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  contrasenia: string;
  roles: string[] = [];
  errMsj: string;

  //validacion
  public formLogin: FormGroup = new FormGroup({});
  //expresion regular
  public expReg = /^[a-zA-Z0-9]{5,5}$/;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.validation();
  }

  validation(): void {
    this.formLogin = this.formBuilder.group({
      nombreUsuario: [
        '',
        [Validators.required, Validators.pattern(this.expReg)],
      ],
      contrasenia: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }
  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.contrasenia);
    this.authService.login(this.loginUsuario).subscribe({
      next: (data) => {
        this.isLogged = true;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['/dashboard']);
      },

      error: (err) => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errMsj = err.error.message; //mensaje hace referencia a la clase mensaje del back
      },
    });
  }
}
