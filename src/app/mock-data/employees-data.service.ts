import { Injectable, EventEmitter, Output } from "@angular/core";
import { Employee } from "../model/employee";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EmployeesDataService {
  // mock employee list data
  employeesList: Employee[] = [
    {
      id: 1,
      candidateId: 9090,
      laptopId: 184,
      dataCreated: "335",
      deleted: false
    },
    {
      id: 2,
      candidateId: 3458,
      laptopId: 390,
      dataCreated: "335",
      deleted: false
    },
    {
      id: 3,
      candidateId: 1908,
      laptopId: 124,
      dataCreated: "335",
      deleted: false
    },
    {
      id: 4,
      candidateId: 7896,
      laptopId: 314,
      dataCreated: "335",
      deleted: false
    },
    {
      id: 5,
      candidateId: 7823,
      laptopId: 344,
      dataCreated: "335",
      deleted: false
    }
  ];
  constructor() {}
  getEmployeesData(): Observable<Employee[]> {
    return of(this.employeesList);
  }
  
}
