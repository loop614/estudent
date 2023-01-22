import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Discipline } from '../model/Discipline';

@Injectable()
export class ApprovalService extends BaseService {
    getAllApprovals() {
        return this.http.get<Discipline>(
            this.baseUrl + 'get-all-approvals',
            this.jsonOptions,
        );
    }
    getApprovals(idUser: number) {
        return this.http.get<Discipline>(
            this.baseUrl + 'get-approvals/' + idUser,
            this.jsonOptions,
        );
    }
}
