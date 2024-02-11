import { Component, OnInit } from '@angular/core';
import { RoutePath } from '../../shared/global.defs';
import { Location } from '@angular/common';
import { RouteUtils } from '../../shared/route-utils';

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
export class FormHeaderComponent implements OnInit {
    headingDetails: HeadingDetails | undefined = undefined;

    constructor(
        private readonly location: Location,
        private readonly routeUtils: RouteUtils,
    ) {}
    ngOnInit(): void {
        const path = this.location.normalize(this.location.path()).slice(1);
        if (this.routeUtils.isRoutePath(path)) {
            this.headingDetails = routeToHeadingDetails[path];
        }
    }
}
