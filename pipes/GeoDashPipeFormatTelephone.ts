declare var extract: any;
declare var geodash: any;

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatTelephone'})
export class GeoDashPipeFormatTelephone implements PipeTransform {
  transform(value: any, type: any, delimiter: any): any {
    if(Array.isArray(value))
    {
      return value.map((x: any) => { return geodash.codec.formatTelephone(x, delimiter); });
    }
    else
    {
      return geodash.codec.formatTelephone(value, delimiter);
    }
  }
}
