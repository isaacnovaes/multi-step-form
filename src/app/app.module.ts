import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DisplayPricePipe } from './form-container/form-components/summary/display-price.pipe';
import { FormContainerComponent } from './form-container/form-container.component';
import { FormFooterComponent } from './form-container/form-footer/form-footer.component';
import { FormHeaderComponent } from './form-container/form-header/form-header.component';
import { NgModule } from '@angular/core';
import { PersonalInfoComponent } from './form-container/form-components/personal-info/personal-info.component';
import { PickAddonsComponent } from './form-container/form-components/pick-addons/pick-addons.component';
import { PlanSelectionComponent } from './form-container/form-components/plan-selection/plan-selection.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SecondComponent } from './second/second.component';
import { StepInformationComponent } from './step-information/step-information.component';
import { SummaryComponent } from './form-container/form-components/summary/summary.component';

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
        DisplayPricePipe,
    ],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
