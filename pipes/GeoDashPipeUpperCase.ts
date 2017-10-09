declare var extract: any;
declare var geodash: any;

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'upper'})
export class GeoDashPipeUpperCase implements PipeTransform {
  transform(value: any): any {

    if(geodash.util.isString(value))
    {
      return value.toUpperCase();
    }
    else if(Array.isArray(value))
    {
      return value.map((x:any) => { return x.toUpperCase(); });
    }
    else
    {
      return value;
    }
  }
}
