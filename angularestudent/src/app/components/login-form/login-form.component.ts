import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../../services/login.service';

import { LoginUser } from '../../models/LoginUser'
import { AuthToken } from '../../models/AuthToken'
import {Router} from "@angular/router";

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css'],
    providers: [LoginService],
})
export class LoginFormComponent {
    loginForm: any = FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private loginService: LoginService
    ) {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        });
    }

    onSubmit() {
        let user: LoginUser = new LoginUser(this.inputEmail().split('@')[0], this.inputEmail(), this.inputPassword());
        let observable = this.loginService.login(user);
    }

    inputEmail() { return this.formControls.email?.value; }
    inputPassword() { return this.formControls.password?.value; }
    get formControls() { return this.loginForm.controls; }
}
