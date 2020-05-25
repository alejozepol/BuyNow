import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      text: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  openConfirmationSend(message, action){
    this.snackBar.open(message, action, {
      duration: 8000,
    });
  }

  saveMessage(event: Event) {
    event.preventDefault();
    console.log(this.form)
    if (this.form.valid) {
      this.openConfirmationSend(`Gracias, Pronto te contactaremos ${this.form.controls.name.value}`, 'Cerrar' )
      this.router.navigate(['home'])
    }
  }

}
