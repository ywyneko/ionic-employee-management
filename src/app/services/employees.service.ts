import { ActivatedRoute,Router  } from '@angular/router';
import { Employees } from './../models/eployees.model';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

const STORAGE_KEY = "employees";

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {

  employee : any;

  async init(){
    await this.storage.create();
  }

  //Get All Employees
  getAllEmps(){
    return this.storage.get(STORAGE_KEY) || [];
  }

  // event Page ko hyoon
  // get htet lote 
  // p hma set lote 


  // router ne call ne 
  // router

  async editEmp(data : any){
    // let dd = await this.storage.set(STORAGE_KEY,data);
    // console.log("this is edit page");
    // console.log(dd);
  }


  async getEmp(empId : any){
     await this.storage.get(STORAGE_KEY).then((val)=>{
      this.employee = JSON.parse(JSON.stringify(empId));   
     });
    //  console.log(this.employee)
    //  this.editEmp(this.employee);
  }




  //Create
  async createEmp(item : any){
    const storedData = await this.storage.get(STORAGE_KEY) || [];
    storedData.push(item);
    this.storage.set(STORAGE_KEY,storedData);
  }


  //Edit
  updateEmp(key:any,value:any){
    return this.storage.set(key,value);
  }

  //Destroy
  // async destroyEmp(empId : any){
  //   await this.storage.get(STORAGE_KEY).then((val)=>{
  //     this.employee = JSON.parse(JSON.stringify(empId)); 
  //     this.storage.remove(this.employee);  
  //     console.log("done")
  //    });
  // }

  async destroyEmp(index : any){
    let newObj = JSON.parse(await this.storage.get(STORAGE_KEY));
    let indextodelete = index;
    newObj.data.splice(indextodelete, 1)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newObj));
    }

  constructor(private storage : Storage,private route : ActivatedRoute, private router: Router) { 
    this.init();
   }
}
