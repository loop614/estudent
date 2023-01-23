import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { RegisterUser } from '../model/RegisterUser';
import { User } from '../model/User';

@Injectable()
export class RegisterService extends BaseService {
    register(user: RegisterUser) {
        return this.http.post<RegisterUser>(
            this.baseUrl + 'accounts/register/',
            user,
            this.jsonOptions,
        );
    }

    verifyUser(user: RegisterUser) {
        return this.http
            .post<RegisterUser>(
                this.baseUrl + 'verify-user',
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
                    console.error('Server Error on verify-user.');
                    this.router.navigateByUrl('/login');
                },
            );
    }

    verifyEmail(user: RegisterUser) {
        return this.http
            .post<RegisterUser>(
                this.baseUrl + 'verify-email',
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
                    console.error('Server Error on verify email.');
                    this.router.navigateByUrl('/login');
                },
            );
    }

    resetPassword(user: RegisterUser) {
        return this.http
            .post<RegisterUser>(
                this.baseUrl + 'reset-password',
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
                    console.error('Server Error on reset password.');
                    this.router.navigateByUrl('/login');
                },
            );
    }
}
