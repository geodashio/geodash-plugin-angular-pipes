declare var extract: any;
declare var geodash: any;

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'replace'})
export class GeoDashPipeReplace implements PipeTransform {
  transform(value: any, oldSubstring: any, newSubstring: any): any {

    if(geodash.util.isString(value))
    {
      return value.replace(new RegExp(oldSubstring, 'gi'), newSubstring);
    }
    else
    {
      return "";
    }
  }
}
