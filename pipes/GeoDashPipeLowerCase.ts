declare var extract: any;
declare var geodash: any;

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'lower'})
export class GeoDashPipeLowerCase implements PipeTransform {
  transform(value: any): any {

    if(geodash.util.isString(value))
    {
      return value.toLowerCase();
    }
    else if(Array.isArray(value))
    {
      return value.map((x:any) => { return x.toLowerCase(); });
    }
    else
    {
      return value;
    }
  }
}
