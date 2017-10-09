declare var extract: any;
declare var geodash: any;

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'default_if_empty'})
export class GeoDashPipeDefaultIfEmpty implements PipeTransform {
  transform(value: any, fallback: any): any {
    return Array.isArray(value) && value.length > 0 ? value : fallback;
  }
}
