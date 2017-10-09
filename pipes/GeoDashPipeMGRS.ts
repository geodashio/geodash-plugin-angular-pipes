declare var extract: any;
declare var geodash: any;

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'mgrs'})
export class GeoDashPipeMGRS implements PipeTransform {
  transform(value: any): any {
    var newValue = undefined;
    if(geodash.util.isDefined(value))
    {
      if(Array.isArray(value))
      {
        if(value.length == 2)
        {
          newValue = geodash.mgrs.forward(value);
        }
      }
      else
      {
        var lat = geodash.util.coalesce([
          extract("lat", value),
          extract("latitude", value)
        ]);
        var lon = geodash.util.coalesce([
          extract("lon", value),
          extract("lng", value),
          extract("long", value),
          extract("longitude", value)
        ]);
        if(geodash.util.isDefined(lat) && geodash.util.isDefined(lon))
        {
          newValue = geodash.mgrs.forward([lat, lon]);
        }
      }
    }
    return newValue;
  }
}
