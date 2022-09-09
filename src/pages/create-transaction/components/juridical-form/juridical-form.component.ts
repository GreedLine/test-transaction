import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-juridical-form',
  templateUrl: './juridical-form.component.html',
  styleUrls: ['./juridical-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JuridicalFormComponent {

  constructor(private readonly formBuilder: FormBuilder) {
  }

  @Input() parentForm!: FormGroup;
  @Input() indexJuridical!: number;

  get participantsJuridical(): FormArray {
    return this.parentForm.get('participantsJuridical') as FormArray;
  }

  get address(): FormArray {
    return this.participantsJuridical.at(this.indexJuridical).get('address') as FormArray;
  }

  removeParticipant(): void {
    this.participantsJuridical.removeAt(this.indexJuridical)
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
