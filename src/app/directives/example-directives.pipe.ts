import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decorator', pure: true
})
export class ExampleDirectivesPipe implements PipeTransform {

  transform(value: string, dec: string): string {
    return dec + value + dec;
  }

}
