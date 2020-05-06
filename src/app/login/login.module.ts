import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { materialModule } from "../material.module";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    materialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
