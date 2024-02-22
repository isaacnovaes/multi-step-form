import { Component } from '@angular/core';
import { RoutePath } from '../../../shared/global.defs';
import { Router } from '@angular/router';

@Component({
    selector: 'pick-addons',
    templateUrl: './pick-addons.component.html',
    styleUrl: './pick-addons.component.scss',
})
export class PickAddonsComponent {
    constructor(private readonly router: Router) {}

    back(): void {
        this.router.navigate([RoutePath.planSelection]);
    }

    next(): void {
        this.router.navigate([RoutePath.summary]);
    }
}
