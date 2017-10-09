declare var extract: any;
declare var geodash: any;

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatInteger'})
export class GeoDashPipeFormatInteger implements PipeTransform {
  transform(value: any, type: any, delimiter: any): any {
    return geodash.codec.formatInteger(value, type, delimiter);
  }
}
