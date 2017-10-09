declare var extract: any;
declare var geodash: any;

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'split'})
export class GeoDashPipeSplit implements PipeTransform {
  transform(value: any, delimiter: any): any {

    if(geodash.util.isString(value))
    {
      return value.split(geodash.util.isString(delimiter) ? delimiter : ',');
    }
    else
    {
      return [];
    }
  }
}
