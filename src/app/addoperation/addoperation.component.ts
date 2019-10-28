import { Component, OnInit } from '@angular/core';
import { CalcservService } from '../calcserv.service';

@Component({
  selector: 'app-addoperation',
  templateUrl: './addoperation.component.html',
  styleUrls: ['./addoperation.component.css']
})
export class AddoperationComponent  {
 
 result:any;
  constructor(private calc:CalcservService){}
   
   addOpp(x,y)
   {
     this.result=this.calc.add(x,y)
   }
  }

