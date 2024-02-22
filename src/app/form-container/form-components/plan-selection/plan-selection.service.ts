import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export enum PlanSelectionValues {
    Arcade = 'arcade',
    Advanced = 'advanced',
    Pro = 'pro',
}

export interface PlanSelection {
    plan: PlanSelectionValues;
    monthly: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class PlanSelectionService {
    isPersonalInfo = (obj: unknown): obj is PlanSelection => {
        return (
            typeof obj === 'object' &&
            obj !== null &&
            'plan' in obj &&
            'monthly' in obj &&
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            typeof obj.plan === 'string' &&
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            typeof obj.monthly === 'boolean'
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        );
    };
    getPlanSelectionFromLocalStorage = (): PlanSelection | null => {
        const planSelectionString = localStorage.getItem(
            'multi-step-form-data-plan-selection',
        );

        if (planSelectionString) {
            try {
                const planSelectionObject: unknown =
                    JSON.parse(planSelectionString);

                if (this.isPersonalInfo(planSelectionObject)) {
                    return planSelectionObject;
                } else {
                    console.error(
                        'Invalid PlanSelection object retrieved from localStorage',
                    );
                    return null;
                }
            } catch (error) {
                console.error(
                    'Error parsing PlanSelection from localStorage:',
                    error,
                );
                return null;
            }
        } else {
            return null;
        }
    };

    planSelection$: BehaviorSubject<PlanSelection | null> =
        new BehaviorSubject<PlanSelection | null>(
            this.getPlanSelectionFromLocalStorage(),
        );

    addPlanSelection(newPlanSelection: PlanSelection): void {
        localStorage.setItem(
            'multi-step-form-data-plan-selection',
            JSON.stringify(newPlanSelection),
        );
        this.planSelection$.next(newPlanSelection);
    }
}
