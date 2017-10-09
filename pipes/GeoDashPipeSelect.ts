declare var extract: any;
declare var geodash: any;

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'select'})
export class GeoDashPipeSelect implements PipeTransform {
  transform(value: any, name: any): any {

    if(Array.isArray(value))
    {
      return value.map((x:any) => { return x[name]; });
    }
    else
    {
      return value;
    }
  }
}
