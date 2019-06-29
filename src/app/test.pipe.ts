import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: any, args?: any, arg1?: any): any {
    console.log("value", value, args, arg1);
    return args + value + arg1;
  }

}
