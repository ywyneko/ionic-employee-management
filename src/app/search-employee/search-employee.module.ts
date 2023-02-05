import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchEmployeePageRoutingModule } from './search-employee-routing.module';

import { SearchEmployeePage } from './search-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchEmployeePageRoutingModule
  ],
  declarations: [SearchEmployeePage]
})
export class SearchEmployeePageModule {}
