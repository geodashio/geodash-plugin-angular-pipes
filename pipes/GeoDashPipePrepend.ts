declare var extract: any;
declare var geodash: any;

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'prepend'})
export class GeoDashPipePrepend implements PipeTransform {
  transform(value: any, arg: any, fallback: any): any {

    if(geodash.util.isString(value))
    {
      if(value.length > 0)
      {
        return arg + value;
      }
      else
      {
        if(geodash.util.isDefined(fallback))
        {
          return "" + fallback;
        }
        else
        {
          return arg;
        }
      }
    }
    else
    {
      if(geodash.util.isDefined(value))
      {
        return "" + arg + value;
      }
      else
      {
        if(geodash.util.isDefined(fallback))
        {
            return "" + fallback;
        }
        else
        {
          return "" + arg;
        }
      }
    }
  }
}
