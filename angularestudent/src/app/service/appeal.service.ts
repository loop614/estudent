import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Discipline } from '../model/Discipline';

@Injectable()
export class AppealService extends BaseService {
    getAllAppeals() {
        return this.http.get<Discipline>(
            this.baseUrl + 'get-all-appeals',
            this.jsonOptions,
        );
    }
    getAppeals(idUser: number) {
        return this.http.get<Discipline>(
            this.baseUrl + 'get-appeals/' + idUser,
            this.jsonOptions,
        );
    }
}
