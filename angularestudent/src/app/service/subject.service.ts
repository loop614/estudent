import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Discipline } from "../model/Discipline";


@Injectable()
export class SubjectService extends BaseService {
    getSubjects(id_discipline: number) {
        return this.http.get<Discipline>(
            this.baseUrl + 'get-subjects/' + id_discipline,
            this.jsonOptions,
        );
    }
}
