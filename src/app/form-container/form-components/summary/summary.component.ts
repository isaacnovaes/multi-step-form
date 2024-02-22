import { Component } from '@angular/core';
import { RoutePath } from '../../../shared/global.defs';
import { Router } from '@angular/router';

@Component({
    selector: 'summary',
    templateUrl: './summary.component.html',
    styleUrl: './summary.component.scss',
})
export class SummaryComponent {
    constructor(private readonly router: Router) {}
    back(): void {
        this.router.navigate([RoutePath.pickAddons]);
    }

    next(): void {}
}
