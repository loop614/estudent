import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { RegisterUser } from '../model/RegisterUser';
import { User } from '../model/User';

@Injectable()
export class UserService extends BaseService {
    getAllStudents() {
        return this.http.get<RegisterUser>(
            this.baseUrl + 'get-all-students',
            this.jsonOptions,
        );
    }

    getAllAdmins() {
        return this.http.get<RegisterUser>(
            this.baseUrl + 'get-all-admins',
            this.jsonOptions,
        );
    }
}
