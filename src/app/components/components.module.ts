import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AddressFormComponent } from './address-form/address-form.component';
import { TextInputComponent } from './text-input/text-input.component';
import { SelectComponent } from './select/select.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { FormControlComponent } from './form-control/form-control.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    AddressFormComponent,
    AddressCardComponent,
    SelectComponent,
    TextInputComponent
  ],
  declarations: [
    AddressFormComponent,
    AddressCardComponent,
    TextInputComponent,
    SelectComponent,
    FormControlComponent
  ]
})
export class ComponentsModule { }
