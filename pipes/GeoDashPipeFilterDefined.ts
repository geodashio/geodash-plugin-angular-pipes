declare var extract: any;
declare var expand: any;
declare var geodash: any;

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter_defined'})
export class GeoDashPipeFilterDefined implements PipeTransform {
  transform(value: any): any {
    if(Array.isArray(value))
    {
      return value.filter((x:any) => { return geodash.util.isDefined(x); });
      //return value.filter(x:any => geodash.util.isDefined(x));
    }
    else
    {
      return value;
    }
  }
}
