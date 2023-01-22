import { Component } from '@angular/core';
import { AppealWrap } from '../../model/Appeal';
import { AppealService } from '../../service/appeal.service';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-appeal-page',
    templateUrl: './appeal-page.component.html',
    styleUrls: ['./appeal-page.component.css'],
})
export class AppealPageComponent {
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

        this.loadAppealList(Number(user?.idUser));
    }

    private loadAppealList(idUser: number) {
        this.appealService.getAppeals(idUser).subscribe(
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
