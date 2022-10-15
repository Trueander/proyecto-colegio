import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DocenteService } from 'src/app/modules/docentes/services/docente.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  login_form!: FormGroup;

  mensajeError!:string;

  constructor(private router: Router, private docenteService: DocenteService) { }

  ngOnInit(): void {
    this.inicializarLoginFormGroup();
  }

  login() {
    const {usuario, password} = this.login_form.value;
    this.docenteService.login(usuario, password)
        .subscribe({
          next: response => {
            this.router.navigate(['/dashboard'])
            console.log(response)
          },
          error: error => this.mensajeError = error.error
        })
  }

  inicializarLoginFormGroup() {
    this.login_form = new FormGroup({
      usuario: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

}
