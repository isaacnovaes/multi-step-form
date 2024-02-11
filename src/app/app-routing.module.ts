import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { RoutePath } from './shared/global.defs';
import { PersonalInfoComponent } from './form-container/form-components/personal-info/personal-info.component';
import { PlanSelectionComponent } from './form-container/form-components/plan-selection/plan-selection.component';
import { PickAddonsComponent } from './form-container/form-components/pick-addons/pick-addons.component';
import { SummaryComponent } from './form-container/form-components/summary/summary.component';

export const routes: Routes = [
    {
        path: RoutePath.personalInfo,
        title: 'Personal info',
        component: PersonalInfoComponent,
    },
    {
        path: RoutePath.planSelection,
        title: 'Plan selection',
        component: PlanSelectionComponent,
    },
    {
        path: RoutePath.pickAddons,
        title: 'Pick addons',
        component: PickAddonsComponent,
    },
    {
        path: RoutePath.summary,
        title: 'Summary',
        component: SummaryComponent,
    },
    { path: '', redirectTo: 'personal-info', pathMatch: 'full' },
    { path: '**', title: 'Page not found', component: SecondComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
