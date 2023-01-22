import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { User } from '../../model/User';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent {
    constructor(private loginService: LoginService, private router: Router) {}

    get isUserAdmin() {
        let user: User | null = this.loginService.getUserStorage();
        if (user === null) {
            this.router.navigate(['/login']);
        }
        return user?.isSuperUser;
    }
}
