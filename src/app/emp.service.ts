import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
getEmployees(){
  return[
    { "empid": 4, "empname": 'raju3', "empsal": 30000 },
    { "empid": 5, "empname": 'raju4', "empsal": 40000 },
    { "empid": 6, "empname": 'raju5', "empsal": 50000 }
  ]
}
  constructor() { }
}
