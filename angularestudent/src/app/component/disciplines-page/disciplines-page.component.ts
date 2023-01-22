import {Component} from '@angular/core';
import {DisciplineService} from "../../service/discipline.service";
import {DisciplineWrap} from "../../model/Discipline";

@Component({
  selector: 'app-disciplines-page',
  templateUrl: './disciplines-page.component.html',
  styleUrls: ['./disciplines-page.component.css']
})
export class DisciplinesPageComponent {
    loading: boolean = false;
    disciplineWraps: DisciplineWrap[] = [];
    constructor(
        private disciplineService: DisciplineService
    ) {}

    ngOnInit() {
        this.loading = true;
        this.disciplineService.getAllDisciplines().subscribe(
            (data) => {
                let response = JSON.parse(String(data));
                this.disciplineWraps = JSON.parse(response["disciplines"]);
                this.loading = false;
            },
            (error) => {
                console.error(error)
                this.loading = false;
            },
        );
    }

    get isLoading() {
        return this.loading;
    }

    get allDisciplineWraps() {
        return this.disciplineWraps;
    }
}
