import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterUser } from '../../model/RegisterUser';
import { RegisterService } from '../../service/register.service';

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
    registerForm: any = FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private registerService: RegisterService,
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
        this.registerService.register(user);
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
}
