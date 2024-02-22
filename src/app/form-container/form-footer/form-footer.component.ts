import {
    Component,
    EventEmitter,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';
import { Subscription, filter, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RoutePath } from '../../shared/global.defs';
import { RouteUtils } from '../../shared/route-utils';

@Component({
    selector: 'form-footer',
    templateUrl: './form-footer.component.html',
    styleUrl: './form-footer.component.scss',
})
export class FormFooterComponent implements OnInit, OnDestroy {
    @Output()
    back: EventEmitter<void> = new EventEmitter<void>();

    @Output()
    next: EventEmitter<void> = new EventEmitter<void>();

    hideBackButton = true;

    urlSubscription: Subscription | undefined;

    currentStep: number | undefined = undefined;

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
                this.hideBackButton = path === RoutePath.personalInfo;
            });
    }

    onBack(): void {
        this.back.emit();
    }
    onNext(): void {
        this.next.emit();
    }

    ngOnDestroy(): void {
        this.urlSubscription?.unsubscribe();
    }
}
