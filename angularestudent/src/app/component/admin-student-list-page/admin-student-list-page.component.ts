import { Component } from '@angular/core';
import { AppealWrap } from '../../model/Appeal';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { AppealService } from '../../service/appeal.service';
import { UserService } from '../../service/user.service';
import { ListUserWrap } from '../../model/ListUser';

@Component({
    selector: 'app-admin-student-list-page',
    templateUrl: './admin-student-list-page.component.html',
    styleUrls: ['./admin-student-list-page.component.css'],
})
export class AdminStudentListPageComponent {
    loading: boolean = false;
    studentListWraps: ListUserWrap[] = [];
    constructor(
        private router: Router,
        private loginService: LoginService,
        private userService: UserService,
    ) {}

    ngOnInit() {
        this.userService.getAllStudents().subscribe(
            (data) => {
                let response: any = JSON.parse(String(data));
                if (response['students'] === 0) {
                    this.studentListWraps = [];
                } else {
                    this.studentListWraps = JSON.parse(response['students']);
                }
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

    get allStudentListWraps() {
        return this.studentListWraps;
    }
}
