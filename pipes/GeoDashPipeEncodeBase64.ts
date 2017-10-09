declare var extract: any;
declare var geodash: any;

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'b64'})
export class GeoDashPipeEncodeBase64 implements PipeTransform {
  transform(value: any): any {

    if(geodash.util.isString(value))
    {
      return btoa(value);
    }
    else
    {
      return "";
    }
  }
}
