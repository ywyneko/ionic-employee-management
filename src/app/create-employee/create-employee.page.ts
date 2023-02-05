import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.page.html',
  styleUrls: ['./create-employee.page.scss'],
})
export class CreateEmployeePage implements OnInit {


  createForm : FormGroup;


  emp = {
    name : "",
    dob : "",
    nrc : "",
    dep_name : "",
    position : "",
    salary : "",
  }

  constructor(public formbuilder : FormBuilder,private empService : EmployeesService) {

    // errors = [
    //   {
    //     type : 'required',
    //     message : 'Field can not be empty'
    //   },
    //   {
    //     type : 'maxlength',
    //     message : 'Field can not have more than 50 characters'
    //   }
    // ]
    this.createForm  = new FormGroup({
      name : new FormControl('',Validators.required),
      dob : new FormControl('',Validators.required),
      nrc : new FormControl('',Validators.required),
      dep_name : new FormControl('',Validators.required),
      position : new FormControl('',Validators.required),
      salary : new FormControl('',Validators.required),
    });

   }

   async createEmp(){

    await this.empService.createEmp(this.emp);
   }

  //  async addData(){
  //   await this.dataService.addData(this.emp)
  // //  let gg =  await this.storage.set("hello",this.emp);
  // //   console.log(gg);
  // }


  ngOnInit() {
    
  }

}
