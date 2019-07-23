import { Component, OnInit } from "@angular/core";
import { Employee } from "../../model/employee";
import { EmployeesDataService } from "../../mock-data/employees-data.service";

@Component({
  selector: "app-employees-list",
  templateUrl: "./employees-list.component.html",
  styleUrls: ["./employees-list.component.scss"]
})
export class EmployeesListComponent implements OnInit {
  employeesList: Employee[];
  selectedEmployeeToEdit: Employee;
  toEdit: boolean;
  query: string = "";
  constructor(private employeesDataService: EmployeesDataService) {}

  ngOnInit() {
    this.getEmployeesData();
  }

  getEmployeesData(): void {
    this.employeesDataService
      .getEmployeesData()
      .subscribe(data => (this.employeesList = data));
  }
  editEmployeeData(employee: Employee): void {
    this.selectedEmployeeToEdit = employee;
    this.toEdit = true;
  }
  deleteEmployeeData(employee: Employee): void {
    this.employeesList = this.employeesList.filter(e => e.id !== employee.id);
  }
  cancelEdit(): void {
    this.toEdit = false;
  }
  updateData(e, id): void {
    this.toEdit = false;
    this.employeesDataService.updateData(e.value, id);
  }
  search(e: any) {
    this.query += e.key;
    console.log(this.query);
  }
}
