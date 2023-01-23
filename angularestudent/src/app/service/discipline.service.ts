import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Discipline } from '../model/Discipline';
import {
    DisciplineApplication,
    DisciplineApplicationResponse,
} from '../model/DisciplineApplication';

@Injectable()
export class DisciplineService extends BaseService {
    getDisciplines(idUniversity: number) {
        return this.http.get<Discipline>(
            this.baseUrl + 'get-disciplines/' + idUniversity,
            this.jsonOptions,
        );
    }

    getDiscipline(idDiscipline: number) {
        return this.http.get<Discipline>(
            this.baseUrl + 'get-discipline/' + idDiscipline,
            this.jsonOptions,
        );
    }

    createAppeal(disciplineApplication: DisciplineApplication) {
        return this.http.post<DisciplineApplicationResponse>(
            this.baseUrl + 'create-appeal',
            disciplineApplication,
            this.jsonOptions,
        );
    }
}
