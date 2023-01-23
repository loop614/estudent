import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { LoginUser } from '../../model/LoginUser';
import { User } from '../../model/User';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css'],
    providers: [LoginService],
})
export class LoginFormComponent {
    loginForm: any = FormGroup;
    serverErrorMessage: string = '';
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private loginService: LoginService,
    ) {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });
    }

    onSubmit() {
        let user: LoginUser = new LoginUser(
            this.inputEmail().split('@')[0],
            this.inputEmail(),
            this.inputPassword(),
        );
        this.loginService.login(user).subscribe(
            (data) => {
                let user: User = JSON.parse(String(data));
                this.loginService.setTokenStorage(user);
                this.loginService.setUserStorage(user);
                this.router.navigate(['/landing', {}]);
            },
            (error) => {
                if (error.status !== 400) {
                    console.error('Server Error on register.');
                    this.router.navigateByUrl('/login');
                    return;
                }
                let errorJson = JSON.parse(error.error);

                for (const [key, value] of Object.entries(errorJson)) {
                    // @ts-ignore
                    this.serverErrorMessage =
                        'Please check the field ' + key + ': ' + value[0];
                }
            },
        );
    }

    inputEmail() {
        return this.formControls.email?.value;
    }
    inputPassword() {
        return this.formControls.password?.value;
    }
    get formControls() {
        return this.loginForm.controls;
    }

    get errorMessage() {
        return this.serverErrorMessage;
    }
}
