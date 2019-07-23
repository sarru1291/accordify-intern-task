import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Employee } from "src/app/model/employee";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.scss"]
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Output() deleteEmployeeData: EventEmitter<Employee> = new EventEmitter();
  @Output() editEmployeeData: EventEmitter<Employee> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onEditEmployee(employee) {
    this.editEmployeeData.emit(employee);
  }
  onDeleteEmployee(employee) {
    this.deleteEmployeeData.emit(employee);
  }
}
