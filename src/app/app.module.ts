import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddoperationComponent } from './addoperation/addoperation.component';
import { SuboperationComponent } from './suboperation/suboperation.component';
import { MuloperationComponent } from './muloperation/muloperation.component';
import { DivoperationComponent } from './divoperation/divoperation.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpcompComponent } from './empcomp/empcomp.component';
import { EmpService } from './emp.service';
import { CalcservService } from './calcserv.service';

@NgModule({
  declarations: [
    AppComponent,
    AddoperationComponent,
    SuboperationComponent,
    MuloperationComponent,
    DivoperationComponent,
    EmployeeComponent,
    EmpcompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EmpService,CalcservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
