import { EmployeesService } from 'src/app/services/employees.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.page.html',
  styleUrls: ['./edit-employee.page.scss'],
})
export class EditEmployeePage implements OnInit {

  emp = {
    name : "",
    dob : "",
    nrc : "",
    dep_name : "",
    position : "",
    salary : "",
  }

  constructor(public formbuilder : FormBuilder,private empService : EmployeesService) { }

  ngOnInit() {
    
  }

}
