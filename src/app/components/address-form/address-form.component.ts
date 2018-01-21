import { Component, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Address } from '../../services/address.service';
import { SelectOption } from '../select/select.component';
import { environment } from '../../../environments/environment';

export class ControlValidation {
  field: string;
  message: string;
}

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressFormComponent implements OnChanges {

  @Input() mode: 'new' | 'edit';
  @Input() address: Address;
  @Input() addressValidation: ControlValidation[];

  @Output() addressChange: EventEmitter<Address>;

  titleOptions: SelectOption[];
  errors: { [field: string]: string };

  constructor() {
    this.address = this._getEmptyAddress();
    this.addressValidation = [];

    this.titleOptions = environment.TITLE_OPTIONS.map(title => ({
      name: title,
      value: title
    }));
    this.errors = {};

    this.addressChange = new EventEmitter<Address>();
  }

  ngOnChanges() {
    if (!this.address) {
      this.address = this._getEmptyAddress();
    }
    if (this.addressValidation && this.addressValidation.length > 0) {
      this.errors = this.addressValidation.reduce((a, b) => {
        a[b.field] = b.message;
        return a;
      }, {});
    } else {
      this.errors = {};
    }
  }

  changeAddress() {
    this.addressChange.emit(this.address);
  }

  private _getEmptyAddress(): Address {
    return {
      line2: '',
      county: '',
      title: '',
      name: '',
      line1: '',
      town: '',
      postcode: '',
      phone: ''
    };
  }

}
