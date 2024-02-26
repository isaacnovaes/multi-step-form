import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
    PlanSelectionService,
    PlanSelectionValues,
} from './plan-selection.service';
import { RoutePath } from '../../../shared/global.defs';
import { Router } from '@angular/router';

enum PlanSelectionControls {
    Plan = 'plan',
    Monthly = 'monthly',
}

@Component({
    selector: 'plan-selection',
    templateUrl: './plan-selection.component.html',
    styleUrl: './plan-selection.component.scss',
})
export class PlanSelectionComponent implements OnInit {
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
        const planSelectionFromLocalStorage =
            this.planSelectionService.planSelection$.value;
        if (planSelectionFromLocalStorage) {
            this.planSelectionForm.patchValue(planSelectionFromLocalStorage);
        }
    }

    back(): void {
        this.savePlan();
        this.router.navigate([RoutePath.PersonalInfo]);
    }

    next(): void {
        if (this.planSelectionForm.valid) {
            this.savePlan();
            this.router.navigate([RoutePath.PickAddons]);
        }
    }

    private savePlan(): void {
        const { plan, monthly } = this.planSelectionForm.value;
        if (plan !== undefined && monthly !== undefined) {
            this.planSelectionService.addPlanSelection({ plan, monthly });
        }
    }
}
