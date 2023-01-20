import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./components/home-page/home-page.component";
import { RegisterPageComponent } from "./components/register-page/register-page.component";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {UniversityPageComponent} from "./components/university-page/university-page.component";
import {AppealPageComponent} from "./components/appeal-page/appeal-page.component";
import {ApprovalPageComponent} from "./components/approval-page/approval-page.component";


const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'main', component: MainPageComponent },
    { path: 'university', component: UniversityPageComponent },
    { path: 'appeal', component: AppealPageComponent },
    { path: 'approval', component: ApprovalPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
