import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'displayPrice',
})
export class DisplayPricePipe implements PipeTransform {
    transform(value: number, isMonthly: boolean): string {
        return isMonthly ? `$${value}/mo` : `$${value}/yr`;
    }
}
