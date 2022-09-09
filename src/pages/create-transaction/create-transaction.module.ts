import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateTransactionPage} from "./create-transaction.page";
import {PhysicalFormComponent} from "./components/physical-form/physical-form.component";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {TransactionFormComponent} from "./components/transaction-form/transaction-form.component";
import {MatButtonModule} from "@angular/material/button";
import {NameFormComponent} from "./components/name-form/name-form.component";
import {MatInputModule} from "@angular/material/input";
import {AddressPhysicalFormComponent} from "./components/address-physical-form/address-form.component";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {DealFormComponent} from "./components/deal-form/deal-form.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {JuridicalFormComponent} from "./components/juridical-form/juridical-form.component";
import {NameCompanyFormComponent} from "./components/name-company-form/name-company-form.component";
import {AddressJuridicalFormComponent} from "./components/address-juridical-form/address-form.component";


// TODO: Физический и юридический клиент так и просят изоляции в отдельные модули.
// В целом было бы здорово разнести это все как компонентную базу и архитектурное древо.
@NgModule({
  declarations: [
    CreateTransactionPage,
    TransactionFormComponent,
    PhysicalFormComponent,
    JuridicalFormComponent,
    NameCompanyFormComponent,
    NameFormComponent,
    AddressPhysicalFormComponent,
    AddressJuridicalFormComponent,
    DealFormComponent
  ],
  exports: [
    CreateTransactionPage
  ],
  imports: [
    CommonModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class CreateTransactionModule { }
