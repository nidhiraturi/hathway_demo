import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], sortBy: string): any {
    var order = sortBy.charAt(0) == "-" ? 'desc' : "asc";
    sortBy = order == "desc" ? sortBy.substr(1) : sortBy;

    var type = arr && arr.length && typeof(arr[0][sortBy]);

    var sortFunction = function(a,b){

      if (type != 'string' && a[sortBy] < b[sortBy] ||
          type == 'string' && a[sortBy].toLowerCase() < b[sortBy].toLowerCase()) return order == "asc" ? -1 : 1;
      else if (type != 'string' && a[sortBy] > b[sortBy] ||
          type == 'string' && a[sortBy].toLowerCase() > b[sortBy].toLowerCase()) return order == "asc" ? 1 : -1;
      else return 0;
    };

    return arr.sort(sortFunction);
  }

}