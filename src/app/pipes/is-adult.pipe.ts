import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isAdult',
})
export class IsAdultPipe implements PipeTransform {
  transform(age: number, ...args: unknown[]): unknown {
    if (age >= 18) {
      return 'Es mayor de edad';
    } else {
      return 'Es menor de edad';
    }
  }
}
