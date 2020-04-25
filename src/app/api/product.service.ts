import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL = 'https://localhost:44394/api/product/prod';

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get<Product>(this.URL);
  }

  postProduct(formData: Product, fileToUpload: File) {
    const formToPost = new FormData();
    const requestToPost = JSON.stringify({
      codigO_PRODUCTO: formData.codigO_PRODUCTO,
      nombrE_PRODUCTO: formData.nombrE_PRODUCTO,
      descripcion: formData.descripcion,
      imageN_PROD: fileToUpload.name,
      cantidaD_PRODUCTO: formData.cantidaD_PRODUCTO,
      preciO_UNIDAD: formData.preciO_UNIDAD,
      iD_CATEGORIA: formData.iD_CATEGORIA
    });

    formToPost.append('product', requestToPost);
    formToPost.append('imagen', fileToUpload, fileToUpload.name);

    return this.http.post(this.URL, formToPost);
  }

  getCat() {
    return this.http.get('https://localhost:44394/api/category/cat');
  }
}
