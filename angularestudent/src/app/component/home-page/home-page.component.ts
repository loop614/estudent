import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
})
export class HomePageComponent {
    constructor(private loginService: LoginService, private router: Router) {}
    ngOnInit() {
        let user = this.loginService.getUserStorage();
        if (user === null) {
            this.router.navigate(['/login']);
        }
        this.router.navigate(['/landing']);
    }
}
