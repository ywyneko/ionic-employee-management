import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { EmployeesPageRoutingModule } from './employees-routing.module';

import { EmployeesPage } from './employees.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    EmployeesPageRoutingModule
  ],
  declarations: [EmployeesPage]
})
export class EmployeesPageModule {}
