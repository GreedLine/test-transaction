import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.page.html',
  styleUrls: ['./create-transaction.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTransactionPage implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

}
