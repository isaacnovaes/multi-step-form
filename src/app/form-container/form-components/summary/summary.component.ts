import {
    AddonsService,
    PickAddonsFormControls,
} from '../pick-addons/pick-addons.service';
import { Component, OnInit } from '@angular/core';
import {
    PlanSelectionService,
    PlanSelectionValues,
} from '../plan-selection/plan-selection.service';
import { RoutePath } from '../../../shared/global.defs';
import { Router } from '@angular/router';

@Component({
    selector: 'summary',
    templateUrl: './summary.component.html',
    styleUrl: './summary.component.scss',
})
export class SummaryComponent implements OnInit {
    hasAddons = false;

    total = 0;

    protected readonly planPricing: Record<
        PlanSelectionValues,
        Record<'monthly' | 'yearly', number>
    > = {
        [PlanSelectionValues.Arcade]: {
            monthly: 9,
            yearly: 90,
        },
        [PlanSelectionValues.Advanced]: {
            monthly: 12,
            yearly: 120,
        },
        [PlanSelectionValues.Pro]: {
            monthly: 15,
            yearly: 150,
        },
    };

    protected readonly addonPricing: Record<
        PickAddonsFormControls,
        Record<'monthly' | 'yearly', number>
    > = {
        [PickAddonsFormControls.OnlineService]: {
            monthly: 1,
            yearly: 10,
        },
        [PickAddonsFormControls.LargeStorage]: {
            monthly: 2,
            yearly: 20,
        },
        [PickAddonsFormControls.CustomizableProfile]: {
            monthly: 2,
            yearly: 20,
        },
    };

    protected readonly RoutePath = RoutePath;

    constructor(
        private readonly router: Router,
        protected planSelectionService: PlanSelectionService,
        protected addonsService: AddonsService,
    ) {}

    ngOnInit(): void {
        this.hasAddons = Object.values(
            this.addonsService.addons$.value ?? {},
        ).some((value) => value);

        const plan = this.planSelectionService.planSelection$.value;

        if (!plan) {
            return;
        }

        if (plan) {
            this.total =
                this.planPricing[plan.plan][
                    plan.monthly ? 'monthly' : 'yearly'
                ];
        }

        const addons = this.addonsService.addons$.value;

        if (addons) {
            const { onlineService, largeStorage, customizableProfile } = addons;
            if (onlineService) {
                this.total +=
                    this.addonPricing.onlineService[
                        plan.monthly ? 'monthly' : 'yearly'
                    ];
            }
            if (largeStorage) {
                this.total +=
                    this.addonPricing.largeStorage[
                        plan.monthly ? 'monthly' : 'yearly'
                    ];
            }
            if (customizableProfile) {
                this.total +=
                    this.addonPricing.customizableProfile[
                        plan.monthly ? 'monthly' : 'yearly'
                    ];
            }
        }
    }

    back(): void {
        this.router.navigate([RoutePath.PickAddons]);
    }

    next(): void {
        this.router.navigate(['success']);
    }
}
