import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeDescri'
})
export class PipeDescriPipe implements PipeTransform {

  transform(nom:string): string {
    return '=> '+nom;
  }

}
