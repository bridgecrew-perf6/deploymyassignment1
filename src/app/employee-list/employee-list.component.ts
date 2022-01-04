import { Component, Input, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  
  //public employees = [ ];
  @Input() public ParentData;

  constructor() { }

  

  ngOnInit(){
   //this._employeeservice.getEmployees()
     //   .subscribe(data => this.employees = data);
  }
  
  
  

}
