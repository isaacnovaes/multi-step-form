import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export enum PickAddonsFormControls {
    OnlineService = 'onlineService',
    LargeStorage = 'largeStorage',
    CustomizableProfile = 'customizableProfile',
}

export type Addons = Record<PickAddonsFormControls, boolean>;

@Injectable({
    providedIn: 'root',
})
export class AddonsService {
    isAddons = (obj: unknown): obj is Addons => {
        return (
            typeof obj === 'object' &&
            obj !== null &&
            'onlineService' in obj &&
            'largeStorage' in obj &&
            'customizableProfile' in obj &&
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            typeof obj.onlineService === 'boolean' &&
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            typeof obj.largeStorage === 'boolean' &&
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            typeof obj.customizableProfile === 'boolean'
        );
    };
    getAddonsFromLocalStorage = (): Addons | null => {
        const addonsString = localStorage.getItem(
            'multi-step-form-data-addons',
        );

        if (addonsString) {
            try {
                const addonsObject: unknown = JSON.parse(addonsString);

                // Validate the type
                if (this.isAddons(addonsObject)) {
                    return addonsObject;
                } else {
                    console.error(
                        'Invalid Addons object retrieved from localStorage',
                    );
                    return null;
                }
            } catch (error) {
                console.error('Error parsing Addons from localStorage:', error);
                return null;
            }
        } else {
            return null;
        }
    };

    addons$: BehaviorSubject<Addons | null> =
        new BehaviorSubject<Addons | null>(this.getAddonsFromLocalStorage());

    addAddons(newAddons: Addons): void {
        localStorage.setItem(
            'multi-step-form-data-addons',
            JSON.stringify(newAddons),
        );
        this.addons$.next(newAddons);
    }
}
