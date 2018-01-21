import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment';

export class Address {
  id?: number;
  title: string;
  name: string;
  line1: string;
  line2: string;
  county: string;
  town: string;
  postcode: string;
  phone: string;
}

@Injectable()
export class AddressService {

  private static readonly ENDPOINT = 'addresses';

  constructor(private http: Http) { }

  list(): Observable<any> {
    return this._handleResponse(this.http.get(`${environment.API_DOMAIN}/${AddressService.ENDPOINT}`));
  }

  create(address: Address): Observable<any> {
    return this._handleResponse(this.http.post(`${environment.API_DOMAIN}/${AddressService.ENDPOINT}`, address));
  }

  edit(id: number, address: Address): Observable<any> {
    return this._handleResponse(this.http.put(`${environment.API_DOMAIN}/${AddressService.ENDPOINT}/${id}`, address));
  }

  delete(id: number): Observable<any> {
    return this._handleResponse(this.http.delete(`${environment.API_DOMAIN}/${AddressService.ENDPOINT}/${id}`, {}));
  }

  private _handleResponse(response: Observable<Response>): Observable<any> {
    return response
      .map(res => res.json())
      .catch(err => Observable.throw(err.json()));
  }
}
