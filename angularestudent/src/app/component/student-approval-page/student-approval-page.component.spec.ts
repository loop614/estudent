import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentApprovalPageComponent } from './student-approval-page.component';

describe('StudentApprovalPageComponent', () => {
    let component: StudentApprovalPageComponent;
    let fixture: ComponentFixture<StudentApprovalPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StudentApprovalPageComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(StudentApprovalPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
