import { AddonsService, PickAddonsFormControls } from './pick-addons.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PlanSelectionService } from '../plan-selection/plan-selection.service';
import { RoutePath } from '../../../shared/global.defs';
import { Router } from '@angular/router';

@Component({
    selector: 'pick-addons',
    templateUrl: './pick-addons.component.html',
    styleUrl: './pick-addons.component.scss',
})
export class PickAddonsComponent implements OnInit {
    isMonthly: boolean | undefined;

    pickAddonsForm = new FormGroup({
        [PickAddonsFormControls.OnlineService]: new FormControl(false, {
            nonNullable: true,
        }),
        [PickAddonsFormControls.LargeStorage]: new FormControl(false, {
            nonNullable: true,
        }),
        [PickAddonsFormControls.CustomizableProfile]: new FormControl(false, {
            nonNullable: true,
        }),
    });

    constructor(
        private readonly router: Router,
        private readonly planSelectionService: PlanSelectionService,
        private readonly addonsService: AddonsService,
    ) {}

    ngOnInit(): void {
        const planSelection = this.planSelectionService.planSelection$.value;
        if (planSelection) {
            this.isMonthly = planSelection.monthly;
        }

        const addonsFromLocalStorage = this.addonsService.addons$.value;
        if (addonsFromLocalStorage) {
            this.pickAddonsForm.patchValue(addonsFromLocalStorage);
        }
    }

    back(): void {
        this.saveAddons();
        this.router.navigate([RoutePath.planSelection]);
    }

    next(): void {
        this.saveAddons();
        this.router.navigate([RoutePath.summary]);
    }

    private saveAddons(): void {
        const { onlineService, largeStorage, customizableProfile } =
            this.pickAddonsForm.value;

        this.addonsService.addAddons({
            onlineService: Boolean(onlineService),
            largeStorage: Boolean(largeStorage),
            customizableProfile: Boolean(customizableProfile),
        });
    }

    protected readonly PickAddonsFormControls = PickAddonsFormControls;
}
