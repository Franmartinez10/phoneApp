import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gb'
})
export class GbPipe implements PipeTransform {
  transform(value: number): string {
    let result:string
    result = value + " gb"
    return result;
  }

}
