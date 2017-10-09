declare var extract: any;
declare var geodash: any;

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatArray'})
export class GeoDashPipeFormatArray implements PipeTransform {
  transform(value: any, fallback: any): any {
    if(Array.isArray(value))
    {
      if(value.length == 0)
      {
        return geodash.util.isDefined(fallback) ? fallback : "";
      }
      else if(value.length == 1)
      {
        return value[0];
      }
      else if(value.length == 2)
      {
        return value.join(" and ");
      }
      else // greater than 2
      {
        return value.slice(0,-1).join(", ")+", and "+value[value.length - 1];
      }
    }
    else
    {
      return value;
    }
  }
}
