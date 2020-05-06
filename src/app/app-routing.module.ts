import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { CreateEntityComponent } from "./create-entity/create-entity.component";
//import { EntitiesComponent } from "./entities/entities.component";
const routes: Routes = [

  {path: 'home', loadChildren:() => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'login', loadChildren:() => import('./login/login.module').then(m => m.LoginModule)},
  {path: '', loadChildren:() => import('./login/login.module').then(m => m.LoginModule)}
/*   {
    path: 'entities',
    component: EntitiesComponent
  },
  {
    path: 'create-entity',
    component: CreateEntityComponent
  },
  {
    path: '',
    component: EntitiesComponent
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
