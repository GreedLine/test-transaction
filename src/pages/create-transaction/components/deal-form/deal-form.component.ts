import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-deal-form',
  templateUrl: './deal-form.component.html',
  styleUrls: ['./deal-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DealFormComponent {

  // TODO: Сделки стоят отдельно от клиентов, т.к. в документе в списке они указаны на одном уровне.
  // При необходимости их можно перенести, в этом нет ничего сложного.

  @Input() parentForm!: FormGroup;
  @Input() indexDeal!: number;

  get deals(): FormArray {
    return this.parentForm.get('deals') as FormArray;
  }

  removeDeal(): void {
    this.deals.removeAt(this.indexDeal)
  }

}
