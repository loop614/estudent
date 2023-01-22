import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { LoginUser } from '../model/LoginUser';
import { User } from '../model/User';

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
                    let user: User = JSON.parse(String(data));
                    this.setTokenStorage(user);
                    this.setUserStorage(user);
                    console.log(data);
                    this.router.navigate(['/landing', {}]);
                },
                (error) => {
                    console.error('Server Error on logging in.');
                    this.router.navigateByUrl('/login');
                },
            );
    }
}
