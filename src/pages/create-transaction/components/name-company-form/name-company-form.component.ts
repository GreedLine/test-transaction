import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-name-company-form',
  templateUrl: './name-company-form.component.html',
  styleUrls: ['./name-company-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameCompanyFormComponent {
  @Input() parentForm!: FormGroup;
  @Input() indexParticipant!: number;
}
