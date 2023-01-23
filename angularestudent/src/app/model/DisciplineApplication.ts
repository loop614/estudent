import {Validators} from "@angular/forms";

export class DisciplineApplication {
    id_user: number = 0;
    id_discipline: number = 0;
    date_of_birth: string = '';
    place_of_birth: string = '';
    cover_letter: string = '';
    average_grade: number = 0;
    graduation_test_result: number = 0;
    finished_school: string = '';
    finished_school_file_path: string = '';

    constructor(
        id_user: number,
        id_discipline: number,
        date_of_birth: string,
        place_of_birth: string,
        cover_letter: string,
        average_grade: number,
        graduation_test_result: number,
        finished_school: string,
        finished_school_file_path: string
    ) {
        this.id_user = id_user;
        this.id_discipline = id_discipline;
        this.date_of_birth = date_of_birth;
        this.place_of_birth = place_of_birth;
        this.cover_letter = cover_letter;
        this.average_grade = average_grade;
        this.graduation_test_result = graduation_test_result;
        this.finished_school = finished_school;
        this.finished_school_file_path = finished_school_file_path;
    }
}

export class DisciplineApplicationResponse {
    success: boolean = false;
    message: string = '';
}
