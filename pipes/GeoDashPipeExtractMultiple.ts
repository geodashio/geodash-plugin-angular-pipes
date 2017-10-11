declare var extract: any;
declare var expand: any;
declare var geodash: any;

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'extract_multiple'})
export class GeoDashPipeExtractMultiple implements PipeTransform {
  transform(value: any, ...paths: string[]): any {

    return paths.length > 0 ? paths.map((path: any) => { return extract(geodash.util.expand(path), value); }) : undefined;

  }
}
