import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'personName',
})
export class PersonNamePipe implements PipeTransform {
    transform(value: string): string {
        if (!value) {
            return '';
        }

        const firstName = value.split(' ')[0];

        return firstName ?? '';
    }
}
