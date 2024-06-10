import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
  transform(value: any, fly: boolean): any {
    return (fly)
    ? value = 'Puede volar'
    : value = 'No puede volar';
  }
}
