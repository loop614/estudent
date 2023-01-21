import {CanActivate, Router, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {LoginService} from "../service/login.service";
import {User} from "../model/User";

export class IsSuperUser implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) {}

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let estudentUser = localStorage.getItem('estudent_user');
        if (estudentUser === null) {
            return false;
        }

        let user: User = JSON.parse(String(estudentUser));
        if (user.isSuperUser) {
            return true;
        } else {
            this.router.navigate(['/main']);
            return false;
        }
    }
}
