import { Component } from '@angular/core';
import { ApprovalWrap } from '../../model/Approval';
import { LoginService } from '../../service/login.service';
import { ApprovalService } from '../../service/approval.service';

@Component({
    selector: 'app-admin-approvals-page',
    templateUrl: './admin-approvals-page.component.html',
    styleUrls: ['./admin-approvals-page.component.css'],
})
export class AdminApprovalsPageComponent {
    loading: boolean = false;
    approvalWraps: ApprovalWrap[] = [];
    constructor(
        private loginService: LoginService,
        private approvalService: ApprovalService,
    ) {}

    ngOnInit() {
        this.loading = true;
        let user = this.loginService.getUserStorage();
        this.loadApprovalList(Number(user?.idUser));
    }

    private loadApprovalList(idUser: number) {
        this.approvalService.getAllApprovals().subscribe(
            (data) => {
                let response: any = JSON.parse(String(data));
                if (response['approvals'] === 0) {
                    this.approvalWraps = [];
                } else {
                    this.approvalWraps = JSON.parse(response['approvals']);
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

    get allApprovalWraps() {
        return this.approvalWraps;
    }
}
