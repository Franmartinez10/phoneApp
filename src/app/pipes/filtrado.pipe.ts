import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrado'
})
export class FiltradoPipe implements PipeTransform {

  transform(value:Array<any>, args?: any): any {
    while(args>0){
    return value.filter((phone)=>{
      return phone.name = args
    })
    }
    {
      return value
    }
  }

}
