import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-address-physical-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressPhysicalFormComponent {

  // Этот компонент очевидно переиспользуется, встал вопрос - как же сделать его универсальным //
  // Немного покопавшись, я пришёл к выводу, что сделать его абсолютно универсальным не получится, т.к. //
  // Иначальный подход с четким разделением физических и юридических клиентов не позволяет //
  // Сделать этот компонент универсальным - структуры объектов разные //
  // С одной стороны это имеет явный минус: при внесении нового типа клиентов (условно ИП) придётся //
  // Дописывать данный компонент специально для ИП, но с другой стороны подобный подход позволяет нам //
  // Четко разбить модели объектов без путаницы в типизации //


  // TODO: Мне этот адрес не дает покоя, все же должен быть способ его унифицировать. Спросить проверяющего.
  @Input() parentForm!: FormGroup;
  @Input() indexParticipant!: number;
  @Input() indexAddress!: number;

  get participantsPhysical(): FormArray {
    return this.parentForm.get('participantsPhysical') as FormArray;
  }

  get address(): FormArray {
    return this.participantsPhysical.at(this.indexParticipant).get('address') as FormArray;
  }

  removeAddress(): void {
    this.address.removeAt(this.indexAddress)
  }

}
