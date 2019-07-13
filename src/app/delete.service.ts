import { Injectable } from "@angular/core";

@Injectable()
export class DeleteService {
  constructor() {}
  delete(list, key) {
    let empObj = list.find(emp => {
      return emp.key == key;
    });
    let index = list.indexOf(empObj);
    list.splice(index, 1);
  }
}
