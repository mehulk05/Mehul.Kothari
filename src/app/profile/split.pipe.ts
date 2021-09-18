import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
   
      if(!value) {
        return;
      }
      return value.split(" .");
    }
  

}
