import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyMask',
})
export class MoneyMaskPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    return `$${value}`;
  }
}
