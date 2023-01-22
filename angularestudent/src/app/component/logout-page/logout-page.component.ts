import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-logout-page',
    templateUrl: './logout-page.component.html',
    styleUrls: ['./logout-page.component.css'],
})
export class LogoutPageComponent {
    constructor(private loginService: LoginService, private router: Router) {}
    ngOnInit() {
        this.loginService.clearStorage();
        this.router.navigate(['/login']);
    }
}
