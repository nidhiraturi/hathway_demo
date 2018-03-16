import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(item: any, key: any): any {

   
    if (key === undefined)
      return item;
     
    return item.filter(function (item) {
 
      return ((item.effective_t.includes(key)) ||
        (item.uploaded.includes(key)) ||
        (item.downloaded.includes(key))
        || (item.total_data.includes(key)) ||
        (item.duration.includes(key))
       );
    })
  }

}
