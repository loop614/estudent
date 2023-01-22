import { Component } from '@angular/core';
import {SubjectService} from "../../service/subject.service";
import {SubjectWrap} from "../../model/Subject";

@Component({
  selector: 'app-subjects-page',
  templateUrl: './subjects-page.component.html',
  styleUrls: ['./subjects-page.component.css']
})
export class SubjectsPageComponent {
    loading: boolean = false;
    subjectWraps: SubjectWrap[] = [];
    constructor(
        private subjectService: SubjectService
    ) {}

    ngOnInit() {
        this.loading = true;
        this.subjectService.getSubjects(1).subscribe(
            (data) => {
                let response = JSON.parse(String(data));
                this.subjectWraps = JSON.parse(response["subjects"]);
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

    get allSubjectWraps() {
        return this.subjectWraps;
    }
}
