import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AddressService, Address } from '../../services/address.service';
import { ControlValidation } from '../../components/address-form/address-form.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  addresses: Address[];
  selectedAddress: Address;
  addressesErrors: ControlValidation[];
  mode: 'new' | 'edit';

  constructor(private addressService: AddressService, private modalService: NgbModal) {
    this.addresses = [];
    this.newAddress();
  }

  ngOnInit() {
    this._refreshAddresses();
  }

  newAddress(): void {
    this.mode = 'new';
    this.selectedAddress = null;
    this.addressesErrors = [];
  }

  editAddress(address: Address): void {
    this.mode = 'edit';
    this.selectedAddress = { ...address };
    this.addressesErrors = [];
  }


  submitAddress(address: Address): void {
    this.selectedAddress = address;
    if (this.mode === 'new') {
      // new address
      this.addressService.create(address).subscribe(
        res => {
          this.addresses.push(res);
          this.newAddress();
        },
        err => this.addressesErrors = err);
    } else {
      // editing
      this.addressService.edit(this.selectedAddress.id, address).subscribe(
        res => {
          this.addresses = this.addresses.map((item: Address) => {
            if (item.id === this.selectedAddress.id) {
              return res;
            }
            return item;
          });
          this.newAddress();
        },
        err => this.addressesErrors = err);
    }
  }

  deleteAddress(addressId: number, confirmModal: TemplateRef<any>): void {
    this.modalService.open(confirmModal).result.then(confirm => {
      if (confirm) {
        this.addressService.delete(addressId).subscribe(
          res => {
            if (this.selectedAddress && this.selectedAddress.id === addressId) {
              this.newAddress();
            }
            this.addresses = this.addresses.filter(address => address.id !== addressId);
          });
      }
    });
  }

  private _refreshAddresses() {
    this.addressService.list().subscribe(res => {
      this.addresses = res;
    });
  }

}
