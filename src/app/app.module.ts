import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { StepInformationComponent } from './step-information/step-information.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { FormHeaderComponent } from './form-container/form-header/form-header.component';
import { FormFooterComponent } from './form-container/form-footer/form-footer.component';
import { PersonalInfoComponent } from './form-container/form-components/personal-info/personal-info.component';
import { PlanSelectionComponent } from './form-container/form-components/plan-selection/plan-selection.component';
import { PickAddonsComponent } from './form-container/form-components/pick-addons/pick-addons.component';
import { SummaryComponent } from './form-container/form-components/summary/summary.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        SecondComponent,
        StepInformationComponent,
        FormContainerComponent,
        FormHeaderComponent,
        FormFooterComponent,
        PersonalInfoComponent,
        PlanSelectionComponent,
        PickAddonsComponent,
        SummaryComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
