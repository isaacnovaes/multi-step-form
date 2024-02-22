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
    protected readonly STEPS = STEPS;

    currentStep: number | undefined = undefined;

    urlSubscription: Subscription | undefined = undefined;

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
