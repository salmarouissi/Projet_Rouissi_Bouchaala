import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCurrencyTn'
})
export class PipeCurrencyTnPipe implements PipeTransform {

  transform(prix:number): string {
    return prix +' TD';
  }

}
