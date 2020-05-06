import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntitiesComponent } from './entities/entities.component';
import { CreateEntityComponent } from './create-entity/create-entity.component';

const routes: Routes = [
    {path: 'entities', component : EntitiesComponent},
    {path: 'create-entity', component : CreateEntityComponent},
    {path: '', redirectTo: 'entities', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRoutingModule { }
