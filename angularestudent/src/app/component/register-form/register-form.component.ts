import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterUser } from '../../model/RegisterUser';
import { RegisterService } from '../../service/register.service';
import { User } from '../../model/User';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
    registerForm: any = FormGroup;
    serverErrorMessage: string = '';
    constructor(
        private formBuilder: FormBuilder,
        private registerService: RegisterService,
        private loginService: LoginService,
        private router: Router,
    ) {
        this.registerForm = this.formBuilder.group({
            first_name: ['', [Validators.required]],
            last_name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
            password_confirm: ['', [Validators.required]],
        });
    }

    onSubmit() {
        let user: RegisterUser = new RegisterUser(
            this.inputEmail().split('@')[0],
            this.inputEmail(),
            this.inputPassword(),
            this.inputPasswordConfirm(),
            this.inputName(),
            this.inputLastName(),
        );
        this.registerService.register(user).subscribe(
            (data) => {
                this.serverErrorMessage = '';
                let user: User = JSON.parse(String(data));
                this.loginService.setTokenStorage(user);
                this.loginService.setUserStorage(user);
                console.log(data);
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
    inputPasswordConfirm() {
        return this.formControls.password_confirm?.value;
    }
    inputName() {
        return this.formControls.first_name?.value;
    }
    inputLastName() {
        return this.formControls.last_name?.value;
    }
    get formControls() {
        return this.registerForm.controls;
    }

    get errorMessage() {
        return this.serverErrorMessage;
    }
}
