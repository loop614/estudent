import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAppealsPageComponent } from './student-appeals-page.component';

describe('StudentAppealsPageComponent', () => {
    let component: StudentAppealsPageComponent;
    let fixture: ComponentFixture<StudentAppealsPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StudentAppealsPageComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(StudentAppealsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
