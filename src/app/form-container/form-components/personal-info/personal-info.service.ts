import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
}

@Injectable({
    providedIn: 'root',
})
export class PersonalInfoService {
    isPersonalInfo = (obj: unknown): obj is PersonalInfo => {
        return (
            typeof obj === 'object' &&
            obj !== null &&
            'name' in obj &&
            'email' in obj &&
            'phone' in obj &&
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            typeof obj.name === 'string' &&
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            typeof obj.email === 'string' &&
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            typeof obj.phone === 'string'
        );
    };
    getPersonalInfoFromLocalStorage = (): PersonalInfo | null => {
        const personalInfoString = localStorage.getItem(
            'multi-step-form-data-personal-info',
        );

        if (personalInfoString) {
            try {
                const personalInfoObject: unknown =
                    JSON.parse(personalInfoString);

                // Validate the type
                if (this.isPersonalInfo(personalInfoObject)) {
                    return personalInfoObject;
                } else {
                    console.error(
                        'Invalid PersonalInfo object retrieved from localStorage',
                    );
                    return null;
                }
            } catch (error) {
                console.error(
                    'Error parsing PersonalInfo from localStorage:',
                    error,
                );
                return null;
            }
        } else {
            return null;
        }
    };

    personalInfo$: BehaviorSubject<PersonalInfo | null> =
        new BehaviorSubject<PersonalInfo | null>(
            this.getPersonalInfoFromLocalStorage(),
        );

    addPersonalInfo(newPersonalInfo: PersonalInfo): void {
        localStorage.setItem(
            'multi-step-form-data-personal-info',
            JSON.stringify(newPersonalInfo),
        );
        this.personalInfo$.next(newPersonalInfo);
    }
}
