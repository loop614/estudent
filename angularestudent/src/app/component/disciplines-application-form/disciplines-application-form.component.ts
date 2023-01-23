import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../../service/login.service";
import {LoginUser} from "../../model/LoginUser";
import {User} from "../../model/User";
import {DisciplineApplication} from "../../model/DisciplineApplication";
import {DisciplineService} from "../../service/discipline.service";

@Component({
  selector: 'app-disciplines-application-form',
  templateUrl: './disciplines-application-form.component.html',
  styleUrls: ['./disciplines-application-form.component.css']
})
export class DisciplinesApplicationFormComponent {
    disciplinesApplicationForm: any = FormGroup;
    serverErrorMessage: string = '';
    constructor(
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private router: Router,
        private disciplineService: DisciplineService,
        private loginService: LoginService,
    ) {
        this.disciplinesApplicationForm = this.formBuilder.group({
            date_of_birth: ['', [Validators.required]],
            place_of_birth: ['', [Validators.required]],
            finished_school: ['', [Validators.required]],
            finished_school_file_path: ['', [Validators.required]],
            cover_letter: ['', [Validators.required]],
            average_grade: ['', [Validators.required]],
            graduation_test_result: ['', [Validators.required]],
        });
    }

    onSubmit() {
        let disciplineId = this.activatedRoute.snapshot.paramMap.get('id_discipline');
        let user = this.loginService.getUserStorage();
        if (user === null) {
            this.router.navigate(['/login']);
        }
        let userID: number = Number(user?.idUser);

        let disciplineApplication: DisciplineApplication = new DisciplineApplication(
            userID,
            Number(disciplineId),
            this.inputDateOfBirth(),
            this.inputPlaceOfBirth(),
            this.inputCoverLetter(),
            this.inputGradeAverage(),
            this.inputGradeAverageTestResult(),
            this.inputFinishedSchool(),
            this.inputFinishedSchoolFile()
        );
        this.disciplineService.createAppeal(disciplineApplication)
            .subscribe(
                (data) => {
                    this.router.navigateByUrl('/disciplines');
                },
                (error) => {
                    console.error(error)
                },
            );
    }

    inputDateOfBirth() {
        return this.formControls.date_of_birth?.value;
    }

    inputPlaceOfBirth() {
        return this.formControls.place_of_birth?.value;
    }

    inputFinishedSchoolFile() {
        return this.formControls.finished_school_file_path?.value;
    }

    inputCoverLetter() {
        return this.formControls.cover_letter?.value;
    }

    inputGradeAverage() {
        return this.formControls.average_grade?.value;
    }
    inputGradeAverageTestResult() {
        return this.formControls.graduation_test_result?.value;
    }
    inputFinishedSchool() {
        return this.formControls.finished_school?.value;
    }


    get formControls() {
        return this.disciplinesApplicationForm.controls;
    }

    get errorMessage() {
        return this.serverErrorMessage;
    }
}
