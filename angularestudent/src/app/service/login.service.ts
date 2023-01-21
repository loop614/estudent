import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { LoginUser } from '../model/LoginUser';
import { AuthToken } from '../model/AuthToken';

@Injectable()
export class LoginService extends BaseService {
    login(user: LoginUser) {
        return this.http
            .post<LoginUser>(
                this.baseUrl + 'api-token-auth/',
                user,
                this.jsonOptions,
            )
            .subscribe(
                (data) => {
                    let authToken: AuthToken = JSON.parse(String(data));
                    this.setTokenStorage(authToken.token);
                    console.error('Login Success.');
                    this.router.navigateByUrl('/main');
                },
                (error) => {
                    console.error('Server Error on logging in.');
                    this.router.navigateByUrl('/login');
                },
            );
    }
}
