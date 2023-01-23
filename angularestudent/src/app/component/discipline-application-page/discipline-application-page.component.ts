import { Component } from '@angular/core';
import {DisciplineService} from "../../service/discipline.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Discipline} from "../../model/Discipline";

@Component({
  selector: 'app-discipline-application-page',
  templateUrl: './discipline-application-page.component.html',
  styleUrls: ['./discipline-application-page.component.css']
})
export class DisciplineApplicationPageComponent {
    loading: boolean = false;
    private discipline: Discipline = new Discipline();

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private disciplineService: DisciplineService
    ) {}

    ngOnInit() {
        let idDiscipline =
            this.activatedRoute.snapshot.paramMap.get('id_discipline');
        if (idDiscipline === undefined) {
            this.router.navigate(['/landing']);
        }

        this.disciplineService.getDiscipline(Number(idDiscipline)).subscribe(
            (data) => {
                let response: any = JSON.parse(String(data));
                let disciplineWrap = JSON.parse(response['discipline'])[0];
                this.discipline = disciplineWrap.fields;
                this.loading = false;
            },
            (error) => {
                console.error(error);
                this.loading = false;
            },
        );
    }

    get isLoading() {
        return this.loading;
    }

    get selectedDiscipline() {
        return this.discipline;
    }
}
