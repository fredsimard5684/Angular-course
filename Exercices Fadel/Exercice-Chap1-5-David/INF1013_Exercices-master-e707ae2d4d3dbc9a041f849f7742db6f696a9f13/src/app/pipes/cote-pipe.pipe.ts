import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cote'
})
export class CotePipePipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    if (value > 95) {
      return 'A+';
    }
    if (value > 91) {
      return 'A ';
    }
    if (value > 88) {
      return 'A-';
    }
    if (value > 84) {
      return 'B+';
    }
    if (value > 81) {
      return 'B ';
    }
    if (value > 78) {
      return 'B-';
    }
    if (value > 74) {
      return 'C+';
    }
    if (value > 70) {
      return 'C ';
    }
    if (value > 66) {
      return 'D+';
    }
    if (value > 62) {
      return 'D ';
    }
    return 'E ';
  }

}
