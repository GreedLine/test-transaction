import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-address-juridical-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressJuridicalFormComponent {

  // Этот компонент очевидно переиспользуется, встал вопрос - как же сделать его универсальным //
  // Немного покопавшись, я пришёл к выводу, что сделать его абсолютно универсальным не получится, т.к. //
  // Иначальный подход с четким разделением физических и юридических клиентов не позволяет //
  // Сделать этот компонент универсальным - структуры объектов разные //
  // С одной стороны это имеет явный минус: при внесении нового типа клиентов (условно ИП) придётся //
  // Дописывать данный компонент специально для ИП, но с другой стороны подобный подход позволяет нам //
  // Четко разбить модели объектов без путаницы в типизации //

  @Input() parentForm!: FormGroup;
  @Input() indexParticipant!: number;
  @Input() indexAddress!: number;

  get participantsJuridical(): FormArray {
    return this.parentForm.get('participantsJuridical') as FormArray;
  }

  get address(): FormArray {
    return this.participantsJuridical.at(this.indexParticipant).get('address') as FormArray;
  }

  removeAddress(): void {
    this.address.removeAt(this.indexAddress)
  }

}
