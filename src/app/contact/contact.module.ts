import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { FormContactComponent } from './components/form-contact/form-contact.component';

import { MaterialModule } from '@material/material.module';

@NgModule({
  declarations: [FormContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
