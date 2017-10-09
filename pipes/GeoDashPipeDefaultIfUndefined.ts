declare var extract: any;
declare var geodash: any;

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'default_if_undefined'})
export class GeoDashPipeDefaultIfUndefined implements PipeTransform {
  transform(value: any, fallback: any): any {
    return geodash.util.isDefined(value) ? value : fallback;
  }
}
