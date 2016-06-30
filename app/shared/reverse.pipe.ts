import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reversePipe'
})

export class ReversePipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        return value.split("").reverse().join("");
    }
}