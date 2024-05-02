import { Component } from '@angular/core';
import { PersonalInfoService } from '../form-container/form-components/personal-info/personal-info.service';

@Component({
    selector: 'success',
    templateUrl: './success.component.html',
    styleUrl: './success.component.scss',
})
export class SuccessComponent {
    constructor(protected readonly personalInfoService: PersonalInfoService) {}
}
