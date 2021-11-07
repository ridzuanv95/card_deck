import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardFormComponent } from './card-form.component';
import { CardFormRoutingModule } from './card-form-routing.modul';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardFormComponent
  ],
  imports: [
    CommonModule,
    CardFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CardFormPageModule { }