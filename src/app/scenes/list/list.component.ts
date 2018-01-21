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
        // This service should return the inserted object id, so I could just push it to the addresses array.
        // Instead, I have to call the list service to refresh it...
        res => {
          this._refreshAddresses();
          this.newAddress();
        },
        err => this.addressesErrors = err);
    } else {
      // editing
      this.addressService.edit(this.selectedAddress.id, address).subscribe(
        res => {
          console.log(this.addresses, this.selectedAddress);
          this.addresses = this.addresses.map((item: Address) => {
            if (item.id === this.selectedAddress.id) {
              return this.selectedAddress;
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
              this.selectedAddress = null;
            }
            this.addresses = this.addresses.filter(address => address.id !== addressId);
            this.newAddress();
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
