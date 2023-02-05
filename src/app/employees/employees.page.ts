import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from './../services/employees.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditEmployeePage } from '../edit-employee/edit-employee.page';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {
  
  employees : any;
  employee : any;

  async getAllEmps(){
    this.employees = await this.employeeService.getAllEmps();
    this.getAllEmps();
  }

  async updateEmp(item :any){
    // await this.storage.get(STORAGE_KEY).then((val)=>{
    //  this.employee = JSON.parse(JSON.stringify(item));
    //   console.log(this.employee.name)
    // });
    this.employeeService.getEmp(item);

  }

  

  destroy(item : any){
    this.employeeService.destroyEmp(item);
  }

  constructor(private employeeService : EmployeesService,public modalCtlr : ModalController) { }

  ngOnInit() {
    this.getAllEmps();
  }

}
