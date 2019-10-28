import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcservService {
  add(a,b){
    return (Number(a)+Number(b));
  }
  
}