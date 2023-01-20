import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { UniversityPageComponent } from './components/university-page/university-page.component';
import { AppealPageComponent } from './components/appeal-page/appeal-page.component';
import { ApprovalPageComponent } from './components/approval-page/approval-page.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        RegisterPageComponent,
        LoginFormComponent,
        RegisterFormComponent,
        LoginPageComponent,
        MainPageComponent,
        NavigationBarComponent,
        UniversityPageComponent,
        AppealPageComponent,
        ApprovalPageComponent,
    ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        HttpClientXsrfModule.withOptions({
            cookieName: 'my-custom-Xsrf-Cookie',
            headerName: 'my-custom-Xsrf-Header'
        })
    ],
    providers:  [],
    bootstrap: [AppComponent]
})
export class AppModule { }
