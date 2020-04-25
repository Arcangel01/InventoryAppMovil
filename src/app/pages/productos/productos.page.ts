import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ProductService } from '../../api/product.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  fileName = 'Seleccionar imagen';

  fileToUpload = null;

  product = {
    codigO_PRODUCTO: [''],
    nombrE_PRODUCTO: [''],
    descripcion: [''],
    cantidaD_PRODUCTO: [''],
    preciO_UNIDAD: [''],
    iD_CATEGORIA: [''],
    imageN_PROD: ['']
  };

  formulario: NgForm;

  imgURL = '../../../assets/img/camera.webp';
  categoria: any;

  constructor(private service: ProductService, private menuC: MenuController) { }

  ngOnInit() {
  }

  updateControls(e): void {
    this.fileToUpload = e.target.files.item(0);
    this.fileName = this.fileToUpload.name;

    const reader = new FileReader();

    reader.onload = (event: any) => {
      this.imgURL = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  onSubmit(value) {
    console.log(value);
    this.product = this.formulario.value;
    console.log(this.product);
    // this.service.postProduct(this.product, this.fileToUpload)
    // .subscribe(res => {
    //   console.log(res);
    //   this.formulario.reset(0);
    // },
    // err => {
    //   console.log(err);
    // });
  }

  obtCat() {
    this.service.getCat()
    .subscribe(res => {
      this.categoria = res;
    },
    err => {
      console.log(err);
    });
  }

  menu() {
    this.menuC.toggle();
  }

}
