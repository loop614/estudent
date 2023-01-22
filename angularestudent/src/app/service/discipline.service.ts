import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Discipline } from "../model/Discipline";


@Injectable()
export class DisciplineService extends BaseService {
    getAllDisciplines() {
        return this.http.get<Discipline>(
                this.baseUrl + 'get-all-disciplines/1',
                this.jsonOptions,
            );
    }
}
