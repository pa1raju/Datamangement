import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from "@ngrx/store";
import { EffectsModule , Actions } from "@ngrx/effects";

import { entityReducer } from "./store/entities.reducer";
import { EntityEffect } from "./store/entities.effects";
import { EntityRoutingModule } from './entity-routing.module';
import { materialModule } from "../../material.module";
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { EntitiesComponent } from './entities/entities.component';
import { CreateEntityComponent } from './create-entity/create-entity.component';
import { UploadComponent } from '../upload/upload.component';


@NgModule({
  declarations: [EntitiesComponent,CreateEntityComponent, UploadComponent],
  imports: [
    CommonModule,
    EntityRoutingModule,
    materialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature("entities", entityReducer),
    EffectsModule.forFeature([EntityEffect])
  ]
})
export class EntityModule { }
