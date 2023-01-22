import { Component } from '@angular/core';
import { SubjectService } from '../../service/subject.service';
import { SubjectWrap } from '../../model/Subject';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-subjects-page',
    templateUrl: './subjects-page.component.html',
    styleUrls: ['./subjects-page.component.css'],
})
export class SubjectsPageComponent {
    loading: boolean = false;
    subjectWraps: SubjectWrap[] = [];
    constructor(
        private activatedRoute: ActivatedRoute,
        private subjectService: SubjectService,
        private router: Router,
    ) {}

    ngOnInit() {
        this.loading = true;
        let idDiscipline =
            this.activatedRoute.snapshot.paramMap.get('id_discipline');
        if (idDiscipline === null) {
            this.router.navigate(['/landing']);
        }
        this.loadSubjectList(Number(idDiscipline));
    }

    private loadSubjectList(idDiscipline: number) {
        if (idDiscipline === undefined) {
            this.router.navigate(['/landing']);
        }
        idDiscipline = Number(idDiscipline);
        this.subjectService.getSubjects(idDiscipline).subscribe(
            (data) => {
                let response = JSON.parse(String(data));
                this.subjectWraps = JSON.parse(response['subjects']);
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

    get allSubjectWraps() {
        return this.subjectWraps;
    }
}
