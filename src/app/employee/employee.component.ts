import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  Employees = [
    { "empid": 1, "empname": 'raju', "empsal": 30000 },
    { "empid": 2, "empname": 'raju1', "empsal": 40000 },
    { "empid": 3, "empname": 'raju2', "empsal": 50000 }
  ]
  constructor() { }

  ngOnInit() {
  }

}
