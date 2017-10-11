declare var extract: any;
declare var geodash: any;

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatFloat'})
export class GeoDashPipeFormatFloat implements PipeTransform {
  transform(value: any, decimals: number): any {
    if(Array.isArray(value))
    {
      return value.map((x:any) => {
        if(geodash.util.isDefined(x) && x !== "")
        {
          return geodash.util.isDefined(decimals) ? x.toFixed(decimals) : x.toString();
        }
        else
        {
          return "";
        }
      });
    }
    else if(geodash.util.isDefined(value) && value !== "")
    {
      return geodash.util.isDefined(decimals) ? value.toFixed(decimals) : value.toString();
    }
    else
    {
      return "";
    }
  }
}
