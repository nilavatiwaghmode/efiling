import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreateComponent } from './admin/create/create.component';


const routes: Routes = [
  {path:'admin',component:AdminComponent,
children:[
{path:'create',component:CreateComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
