import { INITIAL_STEP } from './constants';
import { Injectable } from '@angular/core';
import { RoutePath } from './global.defs';

@Injectable({ providedIn: 'root' })
export class RouteUtils {
    routeUrlToStep(url: RoutePath): number {
        const urlToStep: Record<RoutePath, number> = {
            [RoutePath.PersonalInfo]: 1,
            [RoutePath.PlanSelection]: 2,
            [RoutePath.PickAddons]: 3,
            [RoutePath.Summary]: 4,
        };

        return urlToStep[url] ?? INITIAL_STEP;
    }

    isRoutePath(path?: string): path is RoutePath {
        return Object.values(RoutePath).includes(path as RoutePath);
    }

    getCurrentStep(path: string): number {
        return this.isRoutePath(path)
            ? this.routeUrlToStep(path)
            : INITIAL_STEP;
    }
}
