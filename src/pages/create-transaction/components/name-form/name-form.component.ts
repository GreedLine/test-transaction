import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameFormComponent {
  @Input() parentForm!: FormGroup;
  @Input() indexParticipant!: number;
}
