import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Discipline } from '../model/Discipline';

@Injectable()
export class DisciplineService extends BaseService {
    getDisciplines(idUniversity: number) {
        return this.http.get<Discipline>(
            this.baseUrl + 'get-disciplines/' + idUniversity,
            this.jsonOptions,
        );
    }
}
