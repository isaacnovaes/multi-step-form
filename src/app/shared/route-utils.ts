import { RoutePath } from './global.defs';
import { INITIAL_STEP } from './constants';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RouteUtils {
    routeUrlToStep(url: RoutePath): number {
        const urlToStep: Record<RoutePath, number> = {
            [RoutePath.personalInfo]: 1,
            [RoutePath.planSelection]: 2,
            [RoutePath.pickAddons]: 3,
            [RoutePath.summary]: 4,
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
