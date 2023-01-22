import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { RegisterPageComponent } from './component/register-page/register-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { UniversityPageComponent } from './component/university-page/university-page.component';
import { AppealPageComponent } from './component/appeal-page/appeal-page.component';
import { ApprovalPageComponent } from './component/approval-page/approval-page.component';
import { IsLoggedIn } from './guard/IsLoggedIn';
import { StudentAppealsPageComponent } from './component/student-appeals-page/student-appeals-page.component';
import { StudentsListPageComponent } from './component/students-list-page/students-list-page.component';
import { StudentApprovalPageComponent } from './component/student-approval-page/student-approval-page.component';
import { IsSuperUser } from './guard/IsSuperUser';

const routes: Routes = [
    { path: 'register', component: RegisterPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: '', component: HomePageComponent },
    {
        path: 'landing',
        canActivate: [IsLoggedIn],
        component: LandingPageComponent,
        providers: [IsLoggedIn],
    },
    {
        path: 'university',
        canActivate: [IsLoggedIn],
        component: UniversityPageComponent,
        providers: [IsLoggedIn],
    },
    {
        path: 'appeal',
        canActivate: [IsLoggedIn],
        component: AppealPageComponent,
        providers: [IsLoggedIn],
    },
    {
        path: 'approval',
        canActivate: [IsLoggedIn],
        component: ApprovalPageComponent,
        providers: [IsLoggedIn],
    },
    {
        path: 'student-list',
        canActivate: [IsLoggedIn, IsSuperUser],
        component: StudentsListPageComponent,
        providers: [IsLoggedIn, IsSuperUser],
    },
    {
        path: 'student-appeals/:id_student',
        canActivate: [IsLoggedIn, IsSuperUser],
        component: StudentAppealsPageComponent,
        providers: [IsLoggedIn, IsSuperUser],
    },
    {
        path: 'student-approvals/:id_student',
        canActivate: [IsLoggedIn, IsSuperUser],
        component: StudentApprovalPageComponent,
        providers: [IsLoggedIn, IsSuperUser],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
