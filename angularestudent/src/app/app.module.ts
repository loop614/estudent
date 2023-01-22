import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HomePageComponent } from './component/home-page/home-page.component';
import { RegisterPageComponent } from './component/register-page/register-page.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { RegisterFormComponent } from './component/register-form/register-form.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { NavigationBarComponent } from './component/navigation-bar/navigation-bar.component';
import { UniversityPageComponent } from './component/university-page/university-page.component';
import { AppealPageComponent } from './component/appeal-page/appeal-page.component';
import { ApprovalPageComponent } from './component/approval-page/approval-page.component';
import { StudentsListPageComponent } from './component/students-list-page/students-list-page.component';
import { StudentAppealsPageComponent } from './component/student-appeals-page/student-appeals-page.component';
import { StudentApprovalPageComponent } from './component/student-approval-page/student-approval-page.component';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';
import { DisciplinesPageComponent } from './component/disciplines-page/disciplines-page.component';
import { DisciplineService } from './service/discipline.service';
import { SubjectsPageComponent } from './component/subjects-page/subjects-page.component';
import { SubjectService } from './service/subject.service';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        RegisterPageComponent,
        LoginFormComponent,
        RegisterFormComponent,
        LoginPageComponent,
        LandingPageComponent,
        NavigationBarComponent,
        UniversityPageComponent,
        AppealPageComponent,
        ApprovalPageComponent,
        StudentsListPageComponent,
        StudentAppealsPageComponent,
        StudentApprovalPageComponent,
        DisciplinesPageComponent,
        SubjectsPageComponent,
    ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [SubjectService, DisciplineService, LoginService, Router],
    bootstrap: [AppComponent],
})
export class AppModule {}
