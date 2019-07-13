import { Component, OnInit } from "@angular/core";
import { DeleteService } from "src/app/delete.service";
import { EmployeeService } from "src/app/api/employee.service";
import { EmployeeModel } from "src/app/model/EmployeeModel";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"],
  providers: [DeleteService]
})
export class EmployeeListComponent implements OnInit {
  employees: Array<EmployeeModel> = [];
  // employees = [
  //   {
  //     "key": 1,
  //     "name": "ABC",
  //     "date_of_birth": "10/10/2010",
  //     "position_held": "Manager"
  //   },
  //   {
  //     "key": 2,
  //     "name": "John",
  //     "date_of_birth": "10/10/2010",
  //     "position_held": "Manager"
  //   },
  //   {
  //     "key": 3,
  //     "name": "Michael2",
  //     "date_of_birth": "10/10/2010",
  //     "position_held": "Manager"
  //   },
  //   {
  //     "key": 4,
  //     "name": "Michael3",
  //     "date_of_birth": "10/10/2010",
  //     "position_held": "Manager"
  //   },
  //   {
  //     "key": 5,
  //     "name": "Michael4",
  //     "date_of_birth": "10/10/2010",
  //     "position_held": "Manager"
  //   },
  //   {
  //     "key": 6,
  //     "name": "Michael5",
  //     "date_of_birth": "10/10/2010",
  //     "position_held": "Manager"
  //   }
  // ];

  constructor(
    public deletService: DeleteService,
    public employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.employeeService
      .getEmployees()
      .subscribe((data: Array<IEmployeeDTO>) => {
        // console.log('Employees', data);
        const employeeModels = data.map((employeeDTO: IEmployeeDTO) =>
          EmployeeModel.fromDTO(employeeDTO)
        );
        this.employees = this.employees.concat(employeeModels);
      });
    console.log("deleteService Instance", this.deletService);
  }

  deleteFn(list, key) {
    this.deletService.delete(list, key);
  }
}
