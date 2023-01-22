import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';
import { Injectable } from '@angular/core';

@Injectable()
export class IsLoggedIn implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) {}

    canActivate():
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        if (this.loginService.isTokenValid()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
