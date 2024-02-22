import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
    PlanSelection,
    PlanSelectionService,
    PlanSelectionValues,
} from './plan-selection.service';
import { RoutePath } from '../../../shared/global.defs';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

enum PlanSelectionControls {
    Plan = 'plan',
    Monthly = 'monthly',
}

@Component({
    selector: 'plan-selection',
    templateUrl: './plan-selection.component.html',
    styleUrl: './plan-selection.component.scss',
})
export class PlanSelectionComponent implements OnInit, OnDestroy {
    planSelectionForm = new FormGroup({
        [PlanSelectionControls.Plan]: new FormControl(
            PlanSelectionValues.Arcade,
            { nonNullable: true },
        ),
        [PlanSelectionControls.Monthly]: new FormControl(true, {
            nonNullable: true,
        }),
    });

    isMonthly = true;

    planSelectionServiceSubscription: Subscription | undefined;

    protected readonly PlanSelectionValues = PlanSelectionValues;

    protected readonly PlanSelectionControls = PlanSelectionControls;

    constructor(
        private readonly router: Router,
        private readonly planSelectionService: PlanSelectionService,
    ) {}

    ngOnInit(): void {
        this.planSelectionForm
            .get(PlanSelectionControls.Monthly)
            ?.valueChanges.subscribe((isMonthly: boolean) => {
                this.isMonthly = isMonthly;
            });
        this.planSelectionServiceSubscription =
            this.planSelectionService.planSelection$.subscribe(
                (planSelection: PlanSelection | null) => {
                    if (planSelection) {
                        this.planSelectionForm.patchValue(planSelection);
                    }
                },
            );
    }

    back(): void {
        this.router.navigate([RoutePath.personalInfo]);
    }

    next(): void {
        const { plan, monthly } = this.planSelectionForm.value;
        if (plan !== undefined && monthly !== undefined) {
            this.planSelectionService.addPlanSelection({ plan, monthly });
            this.router.navigate([RoutePath.pickAddons]);
        }
    }

    ngOnDestroy(): void {
        this.planSelectionServiceSubscription?.unsubscribe();
    }
}
