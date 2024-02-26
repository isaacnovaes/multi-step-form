import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'displayPrice',
})
export class DisplayPricePipe implements PipeTransform {
    transform(
        value: number,
        isMonthly: boolean,
        displayPlusSign = true,
    ): string {
        return isMonthly
            ? `${displayPlusSign ? '+' : ''}$${value}/mo`
            : `${displayPlusSign ? '+' : ''}$${value}/yr`;
    }
}
