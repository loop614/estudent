import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { RegisterPageComponent } from './component/register-page/register-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { UniversityPageComponent } from './component/university-page/university-page.component';
import { AppealPageComponent } from './component/appeal-page/appeal-page.component';
import { ApprovalPageComponent } from './component/approval-page/approval-page.component';
import {IsLoggedIn} from "./guard/IsLoggedIn";
import {StudentAppealsPageComponent} from "./component/student-appeals-page/student-appeals-page.component";
import {StudentsListPageComponent} from "./component/students-list-page/students-list-page.component";
import {StudentApprovalPageComponent} from "./component/student-approval-page/student-approval-page.component";
import {IsSuperUser} from "./guard/IsSuperUser";


const routes: Routes = [
    { path: 'register', component: RegisterPageComponent },
    { path: 'login', component: LoginPageComponent },
    {path: '', canActivate:[IsLoggedIn], children: [
        { path: '', component: HomePageComponent },
        { path: 'landing', component: LandingPageComponent },
        { path: 'university', component: UniversityPageComponent },
        { path: 'appeal', component: AppealPageComponent },
        { path: 'approval', component: ApprovalPageComponent },
    ]},
    {path: 'superuser', canActivate:[IsLoggedIn, IsSuperUser], children: [
        { path: 'student-list', component: StudentsListPageComponent },
        { path: 'student-appeals/:id_student', component: StudentAppealsPageComponent },
        { path: 'student-approvals/:id_student', component: StudentApprovalPageComponent },
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
