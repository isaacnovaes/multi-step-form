import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { RoutePath } from './shared/global.defs';

export const routes: Routes = [
    {
        path: RoutePath.personalInfo,
        title: 'Personal info',
        component: FirstComponent,
    },
    {
        path: RoutePath.planSelection,
        title: 'Plan selection',
        component: SecondComponent,
    },
    {
        path: RoutePath.pickAddons,
        title: 'Pick addons',
        component: SecondComponent,
    },
    { path: RoutePath.summary, title: 'Summary', component: SecondComponent },
    { path: '', redirectTo: 'personal-info', pathMatch: 'full' },
    { path: '**', title: 'Page not found', component: SecondComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
