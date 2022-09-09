import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {participantsType, ParticipantType} from "./transaction-form.interfaces";


@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TransactionFormComponent {

  constructor(
    private readonly formBuilder: FormBuilder,
  ) {
  }

  // TODO: К сожалению не применил тут observable & output, вроде как не нуждался в этом функционале, буду рад
  // Взглянуть на более достойные/иные примеры выполнения задачи. Ранее не выносил отдельные формы как компоненты одной большой формы.
  participantsTypesList: ParticipantType[] = [
    {value: 'physical', viewValue: 'Физическое лицо'},
    {value: 'juridical', viewValue: 'Юридическое лицо'},
  ];

  transactionForm = this.formBuilder.group({
    participantType: '',
    participantsPhysical: this.formBuilder.array([]),
    participantsJuridical: this.formBuilder.array([]),
    deals: this.formBuilder.array([])
  });

  get participantsPhysical(): FormArray {
    return this.transactionForm.get('participantsPhysical') as FormArray;
  }

  get participantsJuridical(): FormArray {
    return this.transactionForm.get('participantsJuridical') as FormArray;
  }

  get deals(): FormArray {
    return this.transactionForm.get('deals') as FormArray;
  }

  newParticipantPhysical(): FormGroup {
    return this.formBuilder.group({
      name: this.formBuilder.group({
        firstName: '',
        middleName: '',
        lastName: ''
      }),
      address: this.formBuilder.array([
        this.formBuilder.group({
          country: '',
          city: '',
          area: '',
          street: '',
        }),
      ]),
      phone: new FormControl('', [Validators.max(9), Validators.min(9)])
    })
  }

  // TODO: Здесь мы можем прописать различного рода валидаторы. Один из валидаторов представлен на поле телефона у физ. клиента.
  newParticipantJuridical(): FormGroup {
    return this.formBuilder.group({
      name: this.formBuilder.group({
        type: '',
        name: '',
        inn: ''
      }),
      address: this.formBuilder.array([
        this.formBuilder.group({
          country: '',
          city: '',
          area: '',
          street: '',
        }),
      ]),
    })
  }

  addParticipant(): void {
    switch (this.transactionForm.controls['participantType'].value) {
      case participantsType.physical: {
        this.participantsPhysical.push(this.newParticipantPhysical());
        break;
      }
      case participantsType.juridical: {
        this.participantsJuridical.push(this.newParticipantJuridical());
        break;
      }
      default: {
        throw new Error('Недопустимый тип клиента')
      }
    }
  }

  newDeal(): FormGroup {
    return this.formBuilder.group({
      id: '',
      data: '',
      date: ''
    })
  }

  addDeal(): void {
    this.deals.push(this.newDeal());
  }

  // TODO: Сделать onInit и автоматические добавление нового участника при выборе типа участника
  // P.S. Было сделано, но убрано с целью не запутать лишним функционалом.

}
