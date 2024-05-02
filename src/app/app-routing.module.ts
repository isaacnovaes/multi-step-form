import { RouterModule, Routes } from '@angular/router';
import { INITIAL_ROUTE } from './shared/constants';
import { NgModule } from '@angular/core';
import { PersonalInfoComponent } from './form-container/form-components/personal-info/personal-info.component';
import { PickAddonsComponent } from './form-container/form-components/pick-addons/pick-addons.component';
import { PlanSelectionComponent } from './form-container/form-components/plan-selection/plan-selection.component';
import { RoutePath } from './shared/global.defs';
import { SuccessComponent } from './success/success.component';
import { SuccessGuard } from './shared/success.guard';
import { SummaryComponent } from './form-container/form-components/summary/summary.component';

export const routes: Routes = [
    {
        path: RoutePath.PersonalInfo,
        title: 'Personal info',
        component: PersonalInfoComponent,
    },
    {
        path: RoutePath.PlanSelection,
        title: 'Plan selection',
        component: PlanSelectionComponent,
    },
    {
        path: RoutePath.PickAddons,
        title: 'Pick addons',
        component: PickAddonsComponent,
    },
    {
        path: RoutePath.Summary,
        title: 'Summary',
        component: SummaryComponent,
        canActivate: [SuccessGuard],
    },
    {
        path: 'success',
        title: 'Success',
        component: SuccessComponent,
        canActivate: [SuccessGuard],
    },
    { path: '', redirectTo: INITIAL_ROUTE, pathMatch: 'full' },
    { path: '**', title: 'Page not found', component: SuccessComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
