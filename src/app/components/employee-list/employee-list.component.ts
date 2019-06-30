import { Component, OnInit } from '@angular/core';
import { DeleteService } from 'src/app/delete.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [DeleteService]
})
export class EmployeeListComponent implements OnInit {

  employees = [
    {
      "key": 1,
      "name": "ABC",
      "date_of_birth": "10/10/2010",
      "position_held": "Manager"
    },
    {
      "key": 2,
      "name": "John",
      "date_of_birth": "10/10/2010",
      "position_held": "Manager"
    },
    {
      "key": 3,
      "name": "Michael2",
      "date_of_birth": "10/10/2010",
      "position_held": "Manager"
    },
    {
      "key": 4,
      "name": "Michael3",
      "date_of_birth": "10/10/2010",
      "position_held": "Manager"
    },
    {
      "key": 5,
      "name": "Michael4",
      "date_of_birth": "10/10/2010",
      "position_held": "Manager"
    },
    {
      "key": 6,
      "name": "Michael5",
      "date_of_birth": "10/10/2010",
      "position_held": "Manager"
    }
  ];


  constructor(public deletService: DeleteService) { }




  ngOnInit() {
    console.log("deleteService Instance", this.deletService);
  }



  deleteFn(list, key) {
    this.deletService.delete(list, key);
  }

}
