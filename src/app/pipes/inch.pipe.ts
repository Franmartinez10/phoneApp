import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inch'
})
export class InchPipe implements PipeTransform {

  transform(value: number): string {
    let result:string
    result = value + " inches"
    return result;
  }

}
