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
import { AppealPageComponent } from './component/appeal-page/appeal-page.component';
import { ApprovalPageComponent } from './component/approval-page/approval-page.component';
import { StudentsListPageComponent } from './component/students-list-page/students-list-page.component';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';
import { DisciplinesPageComponent } from './component/disciplines-page/disciplines-page.component';
import { DisciplineService } from './service/discipline.service';
import { SubjectsPageComponent } from './component/subjects-page/subjects-page.component';
import { SubjectService } from './service/subject.service';
import { LogoutPageComponent } from './component/logout-page/logout-page.component';
import { AppealService } from './service/appeal.service';
import { ApprovalService } from './service/approval.service';
import { RegisterService } from './service/register.service';
import { AdminAppealsPageComponent } from './component/admin-appeals-page/admin-appeals-page.component';
import { AdminApprovalsPageComponent } from './component/admin-approvals-page/admin-approvals-page.component';
import { AdminStudentListPageComponent } from './component/admin-student-list-page/admin-student-list-page.component';
import { AdminAdminListPageComponent } from './component/admin-admin-list-page/admin-admin-list-page.component';
import { UserService } from './service/user.service';
import { DisciplineApplicationPageComponent } from './component/discipline-application-page/discipline-application-page.component';
import { DisciplinesApplicationFormComponent } from './component/disciplines-application-form/disciplines-application-form.component';

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
        AppealPageComponent,
        ApprovalPageComponent,
        StudentsListPageComponent,
        DisciplinesPageComponent,
        SubjectsPageComponent,
        LogoutPageComponent,
        AdminAppealsPageComponent,
        AdminApprovalsPageComponent,
        AdminStudentListPageComponent,
        AdminAdminListPageComponent,
        DisciplineApplicationPageComponent,
        DisciplinesApplicationFormComponent,
    ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [
        ApprovalService,
        AppealService,
        SubjectService,
        DisciplineService,
        UserService,
        LoginService,
        RegisterService,
        Router,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
