import { Component } from '@angular/core';
/* Importar lo necesario para hacer formularios en angular */
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss',
})
export class AlumnosComponent {
  public user: any = {
    name: '',
    surname: '',
    age: 0,
    email: '',
  };
  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    age: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor() {}

  onSubmit() {
    console.log(this.form.value);
    this.user.name = this.form.value.name;
    this.user.surname = this.form.value.surname;
    this.user.age = this.form.value.age;
    this.user.email = this.form.value.email;
  }
}
