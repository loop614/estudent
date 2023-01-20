import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {LoginUser} from '../models/LoginUser'
import {AuthToken} from "../models/AuthToken";


@Injectable()
export class LoginService extends BaseService {
    login(user: LoginUser) {
        return this.http.post<LoginUser>(this.baseUrl + 'api-token-auth/', user, this.jsonOptions)
            .subscribe(
            data => {
                let authToken: AuthToken = JSON.parse(String(data));
                console.log(authToken);
                this.router.navigateByUrl('/main');
            },
            error => {
                console.error('Please try again.');
                this.router.navigateByUrl('/');
            }
        );
    }
}
