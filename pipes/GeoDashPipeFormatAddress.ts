declare var extract: any;
declare var geodash: any;

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatAddress'})
export class GeoDashPipeFormatAddress implements PipeTransform {
  transform(value: any, fallback: any): any {
    if(Array.isArray(value) && value.length >=2)
    {
      var text = value.filter((x:any) => { return geodash.util.isDefined(x); }).join(" ");
      if(value.length >= 3 && geodash.util.isDefined(value[3]))
      {
        text = text.length > 0 ? text += ', '+value[3] : value[3];
      }
      return text;
    }
    else
    {
      return fallback;
    }
  }
}
