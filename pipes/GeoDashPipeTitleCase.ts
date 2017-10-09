declare var extract: any;
declare var geodash: any;

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'title'})
export class GeoDashPipeTitleCase implements PipeTransform {
  transform(value: any): any {

    if(geodash.util.isString(value))
    {
      return value.replace(/\w\S*/g, function(txt: string){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
    else if(Array.isArray(value))
    {
      return value.map((x:any) => {
        return x.replace(/\w\S*/g, function(txt: string){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      });
    }
    else
    {
      return value;
    }
  }
}
