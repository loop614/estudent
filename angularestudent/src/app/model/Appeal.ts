export class Appeal {
    datetime_created: string = '';
    date_of_birth: string = '';
    place_of_birth: string = '';
    finished_school: string = '';
    cover_letter: string = '';
    finished_school_file_path: string = '';
    average_grade: number = 0;
    graduation_test_result: number = 0;
}

export class AppealWrap {
    model: string = '';
    pk: number = 0;
    fields: Appeal = new Appeal();
}
