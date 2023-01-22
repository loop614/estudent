import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
    constructor(private loginService: LoginService, private router: Router) {}
    ngOnInit() {
        let user = this.loginService.getUserStorage();
        if (user !== null) {
            this.router.navigate(['/landing']);
        }
    }
}
