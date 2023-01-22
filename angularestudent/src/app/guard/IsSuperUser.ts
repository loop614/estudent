import {
    CanActivate,
    Router,
    UrlSegment,
    UrlSegmentGroup,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';
import { User } from '../model/User';
import { Injectable } from '@angular/core';

@Injectable()
export class IsSuperUser implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) {}

    canActivate():
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        let estudentUser = localStorage.getItem('estudent_user');
        let urlTree = this.router.parseUrl('login');
        if (estudentUser === null) {
            return urlTree;
        }

        let user: User = JSON.parse(String(estudentUser));
        if (user.isSuperUser) {
            return true;
        }

        return urlTree;
    }
}
