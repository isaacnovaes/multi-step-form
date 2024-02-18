import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonalInfo, PersonalInfoService } from './personal-info.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { RoutePath } from '../../../shared/global.defs';

enum PersonalInfoControls {
    Name = 'name',
    Email = 'email',
    Phone = 'phone',
}

@Component({
    selector: 'personal-info',
    templateUrl: './personal-info.component.html',
    styleUrl: './personal-info.component.scss',
})
export class PersonalInfoComponent implements OnInit, OnDestroy {
    personalInfoForm = new FormGroup({
        [PersonalInfoControls.Name]: new FormControl('', Validators.required),
        [PersonalInfoControls.Email]: new FormControl('', [
            Validators.required,
            Validators.email,
        ]),
        [PersonalInfoControls.Phone]: new FormControl('', [
            Validators.required,
            Validators.minLength(9),
        ]),
    });

    personalInfoServiceSubscription: Subscription | undefined = undefined;

    protected readonly PersonalInfoControls = PersonalInfoControls;

    constructor(
        private readonly personalInfoService: PersonalInfoService,
        private readonly router: Router,
    ) {}
    ngOnInit(): void {
        this.personalInfoServiceSubscription =
            this.personalInfoService.personalInfo$
                .pipe()
                .subscribe((personalInfo: PersonalInfo | null) => {
                    if (personalInfo) {
                        this.personalInfoForm.patchValue(personalInfo);
                    }
                });
    }

    next(): void {
        if (this.personalInfoForm.invalid) {
            debugger;
            this.personalInfoForm.markAllAsTouched();
            return;
        }
        const { name, email, phone } = this.personalInfoForm.value;

        if (name && email && phone) {
            this.personalInfoService.addPersonalInfo({ name, email, phone });
            this.router.navigate([RoutePath.planSelection]);
        }
    }

    get getNameControl(): FormControl<string> {
        return this.personalInfoForm.get(
            PersonalInfoControls.Name,
        ) as FormControl<string>;
    }
    get getEmailControl(): FormControl<string> {
        return this.personalInfoForm.get(
            PersonalInfoControls.Email,
        ) as FormControl<string>;
    }
    get getPhoneControl(): FormControl<string> {
        return this.personalInfoForm.get(
            PersonalInfoControls.Phone,
        ) as FormControl<string>;
    }

    ngOnDestroy(): void {
        this.personalInfoServiceSubscription?.unsubscribe();
    }
}
