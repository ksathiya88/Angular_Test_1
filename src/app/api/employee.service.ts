import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IEmployeeDTO } from "./employee.dto";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor(public http: HttpClient) {}

  getEmployees(): Observable<Array<IEmployeeDTO>> {
    return this.http.get("http://localhost:8081/getEmployees").pipe(
      map(response => {
        return response as Array<IEmployeeDTO>;
      })
    );
  }
}
