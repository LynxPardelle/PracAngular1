import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(user: any, ...args: unknown[]): unknown {
    if (user && user.name && user.surname) {
      return `${user.name} ${user.surname}`;
    } else {
      return '';
    }
  }
}
