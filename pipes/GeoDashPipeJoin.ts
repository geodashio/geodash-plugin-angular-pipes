declare var extract: any;
declare var geodash: any;

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'join'})
export class GeoDashPipeJoin implements PipeTransform {
  transform(value: any, delimiter: any): any {

    if(Array.isArray(value))
    {
      if(geodash.util.isString(delimiter))
      {
        return value.join(delimiter);
      }
      else
      {
        return value.join(", ");
      }
    }
    else
    {
      return value;
    }
  }
}
