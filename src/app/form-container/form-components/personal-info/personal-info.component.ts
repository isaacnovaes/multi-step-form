import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
export class PersonalInfoComponent {
    personalInfoForm = new FormGroup({
        [PersonalInfoControls.Name]: new FormControl('', Validators.required),
        [PersonalInfoControls.Email]: new FormControl('', [
            Validators.required,
            Validators.email,
        ]),
        [PersonalInfoControls.Phone]: new FormControl('', Validators.required),
    });
    protected readonly PersonalInfoControls = PersonalInfoControls;

    check(): void {
        debugger;
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
}
