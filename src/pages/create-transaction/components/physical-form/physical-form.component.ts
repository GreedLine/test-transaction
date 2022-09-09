import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-physical-form',
  templateUrl: './physical-form.component.html',
  styleUrls: ['./physical-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhysicalFormComponent {

  constructor(private readonly formBuilder: FormBuilder) {
  }

  @Input() parentForm!: FormGroup;
  @Input() indexParticipant!: number;

  get participantsPhysical(): FormArray {
    return this.parentForm.get('participantsPhysical') as FormArray;
  }

  get address(): FormArray {
    return this.participantsPhysical.at(this.indexParticipant).get('address') as FormArray;
  }

  removeParticipant(): void {
    this.participantsPhysical.removeAt(this.indexParticipant)
  }

  newAddress(): FormGroup {
    return this.formBuilder.group({
      country: '',
      city: '',
      area: '',
      street: '',
    })
  }

  addAddress(): void {
    this.address.push(this.newAddress());
  }

}
