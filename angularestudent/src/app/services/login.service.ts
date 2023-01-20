import { Injectable } from '@angular/core';
import { BaseService} from "./base.service";
import { LoginUser } from '../models/LoginUser'


@Injectable()
export class LoginService extends BaseService {
    login(user: LoginUser) {
        return this.http.post<LoginUser>(this.baseUrl + 'login', user, this.jsonOptions).subscribe();
    }
}
