import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { materialModule } from "../material.module";

import { StoreModule } from "@ngrx/store";
import { EffectsModule , Actions } from "@ngrx/effects";

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    materialModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class HomeModule { }
