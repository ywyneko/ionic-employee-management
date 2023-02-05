import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchEmployeePage } from './search-employee.page';

const routes: Routes = [
  {
    path: '',
    component: SearchEmployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchEmployeePageRoutingModule {}
