import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesPage } from './employees.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeesPage
  },
  // {
  //   path : '',
  //   children : [
  //     {
  //       path: 'create',
  //       loadChildren: () => import('./create-employee/create-employee.module').then( m => m.CreateEmployeePageModule)
  //     },
  //     {
  //       path: 'edit',
  //       loadChildren: () => import('./edit-employee/edit-employee.module').then( m => m.EditEmployeePageModule)
  //     },
  //     {
  //       path: 'search',
  //       loadChildren: () => import('./search-employee/search-employee.module').then( m => m.SearchEmployeePageModule)
  //     }
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesPageRoutingModule {}
