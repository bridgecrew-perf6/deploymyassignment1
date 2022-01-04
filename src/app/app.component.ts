import { Component } from '@angular/core';
import { EmployeeserviceService } from './employeeservice.service';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment1';

  public employees = [ ];

  employeeForm:FormGroup;

  constructor(private _employeeservice: EmployeeserviceService) {

   }

  newEmployee()
  {

  }
  ngOnInit(){
   this._employeeservice.getEmployees()
        .subscribe(data => this.employees = data);
  }
}
