import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emplist',
  template:`<h2>Employee List</h2>
  <ul *ngFor= "let employee of myEmployees">
  <li>{{employee.empid}}-{{employee.empname}}-{{employee.empsal}}</li>
  </ul>`
})
export class EmpcompComponent implements OnInit {
myEmployees=[];
  constructor(private _empservice:EmpService) {
    this.myEmployees=this._empservice.getEmployees();
  }
  ngOnInit() {
  }
}
