import { Component } from '@angular/core';
import { AppealWrap } from '../../model/Appeal';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { AppealService } from '../../service/appeal.service';

@Component({
    selector: 'app-admin-appeals-page',
    templateUrl: './admin-appeals-page.component.html',
    styleUrls: ['./admin-appeals-page.component.css'],
})
export class AdminAppealsPageComponent {
    loading: boolean = false;
    appealWraps: AppealWrap[] = [];
    constructor(
        private router: Router,
        private loginService: LoginService,
        private appealService: AppealService,
    ) {}

    ngOnInit() {
        this.loading = true;
        let user = this.loginService.getUserStorage();
        if (user === null) {
            this.router.navigate(['/login']);
        }

        this.loadAppealList();
    }

    private loadAppealList() {
        this.appealService.getAllAppeals().subscribe(
            (data) => {
                let response: any = JSON.parse(String(data));
                if (response['appeals'] === 0) {
                    this.appealWraps = [];
                } else {
                    this.appealWraps = JSON.parse(response['appeals']);
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

    get allAppealWraps() {
        return this.appealWraps;
    }
}
