import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Address } from '../../services/address.service';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressCardComponent {

  @Input() address: Address;

  @Output() addressEdit: EventEmitter<void>;
  @Output() addressRemove: EventEmitter<void>;

  constructor() {
    this.address = null;

    this.addressEdit = new EventEmitter<void>();
    this.addressRemove = new EventEmitter<void>();
  }

  editAddress(): void {
    this.addressEdit.emit();
  }

  removeAddress(): void {
    this.addressRemove.emit();
  }

}
