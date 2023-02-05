import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateEmployeePage } from './create-employee.page';

const routes: Routes = [
  {
    path: '',
    component: CreateEmployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),FormsModule,ReactiveFormsModule],
  exports: [RouterModule,FormsModule,ReactiveFormsModule],
})
export class CreateEmployeePageRoutingModule {}
