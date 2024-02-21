import { Component, OnDestroy, OnInit } from '@angular/core';
import { RoutePath } from '../../shared/global.defs';
import { RouteUtils } from '../../shared/route-utils';
import { filter, map, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

interface HeadingDetails {
    heading: string;
    description: string;
}

const routeToHeadingDetails: Record<RoutePath, HeadingDetails> = {
    [RoutePath.personalInfo]: {
        heading: 'Personal info',
        description:
            'Please provide your name, email address, and phone number.',
    },
    [RoutePath.planSelection]: {
        heading: 'Select your plan',
        description: 'You have the option of monthly or billing.',
    },
    [RoutePath.pickAddons]: {
        heading: 'Pick add-ons',
        description: 'Add-ons help enhance your gaming experience.',
    },
    [RoutePath.summary]: {
        heading: 'Finishing up',
        description: 'Double-check everything looks OK before confirming.',
    },
};

@Component({
    selector: 'form-header',
    templateUrl: './form-header.component.html',
    styleUrl: './form-header.component.scss',
})
export class FormHeaderComponent implements OnInit, OnDestroy {
    headingDetails: HeadingDetails | undefined = undefined;

    urlSubscription: Subscription | undefined = undefined;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly routeUtils: RouteUtils,
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
            .subscribe((currentPath) => {
                this.headingDetails = routeToHeadingDetails[currentPath];
            });
    }

    ngOnDestroy(): void {
        this.urlSubscription?.unsubscribe();
    }
}
