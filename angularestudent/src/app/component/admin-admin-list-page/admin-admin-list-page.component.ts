import { Component } from '@angular/core';
import { AppealWrap } from '../../model/Appeal';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { AppealService } from '../../service/appeal.service';
import { ListUserWrap } from '../../model/ListUser';
import { UserService } from '../../service/user.service';

@Component({
    selector: 'app-admin-admin-list-page',
    templateUrl: './admin-admin-list-page.component.html',
    styleUrls: ['./admin-admin-list-page.component.css'],
})
export class AdminAdminListPageComponent {
    loading: boolean = false;
    adminListWraps: ListUserWrap[] = [];
    constructor(
        private router: Router,
        private loginService: LoginService,
        private userService: UserService,
    ) {}

    ngOnInit() {
        this.userService.getAllAdmins().subscribe(
            (data) => {
                let response: any = JSON.parse(String(data));
                if (response['admins'] === 0) {
                    this.adminListWraps = [];
                } else {
                    this.adminListWraps = JSON.parse(response['admins']);
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

    get allAdminListWraps() {
        return this.adminListWraps;
    }
}
