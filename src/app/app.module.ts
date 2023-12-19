import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import {
    provideRouter,
    Routes,
    withComponentInputBinding,
} from '@angular/router';

const routes: Routes = [
    { path: 'first', title: 'First route', component: FirstComponent },
    { path: 'second', title: 'Second route', component: SecondComponent },
    { path: '**', redirectTo: 'first', pathMatch: 'full' },
];

@NgModule({
    declarations: [AppComponent, FirstComponent, SecondComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [provideRouter(routes, withComponentInputBinding())],
    bootstrap: [AppComponent],
})
export class AppModule {}
