import { AddonsService } from '../form-container/form-components/pick-addons/pick-addons.service';
import { CanActivateFn } from '@angular/router';
import { PersonalInfoService } from '../form-container/form-components/personal-info/personal-info.service';
import { PlanSelectionService } from '../form-container/form-components/plan-selection/plan-selection.service';
import { inject } from '@angular/core';

export const SuccessGuard: CanActivateFn = () => {
    const personInfoService = inject(PersonalInfoService);
    const planService = inject(PlanSelectionService);
    const addonsService = inject(AddonsService);

    return !!(
        personInfoService.personalInfo$.value &&
        planService.planSelection$.value &&
        addonsService.addons$.value
    );
};
