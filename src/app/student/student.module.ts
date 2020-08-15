import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { AdminComponent } from './admin/admin.component';
import { CreateComponent } from './admin/create/create.component';


@NgModule({
  declarations: [AdminComponent, CreateComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
