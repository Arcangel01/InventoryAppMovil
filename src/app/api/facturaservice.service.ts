import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factura } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class FacturaserviceService {

  constructor(private http: HttpClient) { }

  URL = 'https://localhost:44394/api/factura/fact';

  getFacturas() {
    return this.http.get<Factura>(this.URL);
  }

  postFacturas(factura: Factura) {
    return this.http.post(this.URL, factura);
  }
}
