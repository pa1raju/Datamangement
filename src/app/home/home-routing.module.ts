import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
{
  path : '',
  component: LayoutComponent,
  children:[
    {path:'entity',loadChildren:()=>import('./entity/entity.module').then(m=>m.EntityModule)},
    {path:'glossary',loadChildren:()=>import('./glossary/glossary.module').then(m=>m.GlossaryModule)},
    {path:'',redirectTo:'entity', pathMatch:'full'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
