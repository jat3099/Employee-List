import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  employees : Employee[]; 

  constructor (private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    
    });
  }

}

/* this.employee = [{
  "id":1,
  "firstName": "Ronald",
  "lastName": "Almeida",
  "emailId": "jat3099@hotmail.com"
}] */

