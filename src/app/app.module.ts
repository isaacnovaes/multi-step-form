import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { StepInformationComponent } from './step-information/step-information.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { FormHeaderComponent } from './form-container/form-header/form-header.component';
import { FormFooterComponent } from './form-container/form-footer/form-footer.component';

@NgModule({
    declarations: [AppComponent, FirstComponent, SecondComponent, StepInformationComponent, FormContainerComponent, FormHeaderComponent, FormFooterComponent],
    imports: [BrowserModule, AppRoutingModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
