import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(list: any, search: string, name: string): any {
    // if search is empty return list
    if (search === '' ) {
      return list;
    }
    // else return array of matching strings
    const arr = [];
    for (const item of list) {
      if ( item.name === search) {
        arr.push(item);
      }
    }
    return arr;
  }
}
