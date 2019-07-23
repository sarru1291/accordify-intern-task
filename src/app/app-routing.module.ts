import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { EmployeesListComponent } from "./components/employees-list/employees-list.component";
import { CreateEmployeeComponent } from "./components/create-employee/create-employee.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "employees-list", component: EmployeesListComponent },
  { path: "create-employee", component: CreateEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
