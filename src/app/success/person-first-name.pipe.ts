import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'personFirstName',
})
export class PersonFirstNamePipe implements PipeTransform {
    transform(value: string): string {
        if (!value) {
            return '';
        }

        const firstName = value.split(' ')[0];

        return firstName ?? '';
    }
}
