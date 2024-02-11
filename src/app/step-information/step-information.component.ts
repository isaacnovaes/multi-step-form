import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { STEPS } from '../shared/constants';
import { RouteUtils } from '../shared/route-utils';

@Component({
    selector: 'step-information',
    templateUrl: './step-information.component.html',
    styleUrl: './step-information.component.scss',
})
export class StepInformationComponent implements OnInit {
    protected readonly STEPS = STEPS;

    currentStep!: number;

    constructor(
        private readonly location: Location,
        private readonly routeUtils: RouteUtils,
    ) {}

    ngOnInit(): void {
        const path = this.location.normalize(this.location.path()).slice(1);
        this.currentStep = this.routeUtils.getCurrentStep(path);
    }
}
