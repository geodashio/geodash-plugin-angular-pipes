declare var extract: any;
declare var expand: any;
declare var geodash: any;

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'exclude'})
export class GeoDashPipeExclude implements PipeTransform {
  transform(value: any, select: any, list: any): any {
    if(Array.isArray(value))
    {
      return value.filter((x:any) => { return ! list.includes(x[select]); });
    }
    else
    {
      return value;
    }
  }
}
