import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, filter, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RoutePath } from '../shared/global.defs';
import { RouteUtils } from '../shared/route-utils';
import { STEPS } from '../shared/constants';

@Component({
    selector: 'step-information',
    templateUrl: './step-information.component.html',
    styleUrl: './step-information.component.scss',
})
export class StepInformationComponent implements OnInit, OnDestroy {
    currentStep: number | undefined = undefined;

    urlSubscription: Subscription | undefined = undefined;

    protected readonly STEPS = STEPS;

    protected readonly stepDescription: Record<
        number,
        Record<'name' | 'description', string>
    > = {
        1: {
            name: 'Step 1',
            description: 'YOUR INFO',
        },
        2: {
            name: 'Step 2',
            description: 'SELECT PLAN',
        },
        3: {
            name: 'Step 3',
            description: 'ADD-ONS',
        },
        4: {
            name: 'Step 4',
            description: 'SUMMARY',
        },
    };

    constructor(
        private readonly routeUtils: RouteUtils,
        private readonly route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.urlSubscription = this.route.url
            .pipe(
                map((url) => {
                    const path = url.at(0)?.path;
                    return this.routeUtils.isRoutePath(path) ? path : null;
                }),
                filter((p): p is RoutePath => Boolean(p)),
            )
            .subscribe((path) => {
                this.currentStep = this.routeUtils.getCurrentStep(path);
            });
    }

    ngOnDestroy(): void {
        this.urlSubscription?.unsubscribe();
    }
}
