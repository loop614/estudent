import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { RegisterPageComponent } from './component/register-page/register-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { AppealPageComponent } from './component/appeal-page/appeal-page.component';
import { ApprovalPageComponent } from './component/approval-page/approval-page.component';
import { IsLoggedIn } from './guard/IsLoggedIn';
import { StudentsListPageComponent } from './component/students-list-page/students-list-page.component';
import { IsSuperUser } from './guard/IsSuperUser';
import { DisciplinesPageComponent } from './component/disciplines-page/disciplines-page.component';
import { SubjectsPageComponent } from './component/subjects-page/subjects-page.component';
import { LogoutPageComponent } from './component/logout-page/logout-page.component';
import { AdminAppealsPageComponent } from './component/admin-appeals-page/admin-appeals-page.component';
import { AdminApprovalsPageComponent } from './component/admin-approvals-page/admin-approvals-page.component';
import { AdminAdminListPageComponent } from './component/admin-admin-list-page/admin-admin-list-page.component';
import { AdminStudentListPageComponent } from './component/admin-student-list-page/admin-student-list-page.component';
import { DisciplineApplicationPageComponent } from './component/discipline-application-page/discipline-application-page.component';

const routes: Routes = [
    { path: 'register', component: RegisterPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'logout', component: LogoutPageComponent },
    { path: '', component: HomePageComponent },
    {
        path: 'landing',
        canActivate: [IsLoggedIn],
        component: LandingPageComponent,
        providers: [IsLoggedIn],
    },
    {
        path: 'disciplines',
        canActivate: [IsLoggedIn],
        component: DisciplinesPageComponent,
        providers: [IsLoggedIn],
    },
    {
        path: 'discipline/apply/:id_discipline',
        canActivate: [IsLoggedIn],
        component: DisciplineApplicationPageComponent,
        providers: [IsLoggedIn],
    },
    {
        path: 'subjects/:id_discipline',
        canActivate: [IsLoggedIn],
        component: SubjectsPageComponent,
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
        path: 'admin-appeals-list',
        canActivate: [IsLoggedIn, IsSuperUser],
        component: AdminAppealsPageComponent,
        providers: [IsLoggedIn, IsSuperUser],
    },
    {
        path: 'admin-approvals-list',
        canActivate: [IsLoggedIn, IsSuperUser],
        component: AdminApprovalsPageComponent,
        providers: [IsLoggedIn, IsSuperUser],
    },
    {
        path: 'admin-admins-list',
        canActivate: [IsLoggedIn, IsSuperUser],
        component: AdminAdminListPageComponent,
        providers: [IsLoggedIn, IsSuperUser],
    },
    {
        path: 'admin-students-list',
        canActivate: [IsLoggedIn, IsSuperUser],
        component: AdminStudentListPageComponent,
        providers: [IsLoggedIn, IsSuperUser],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
