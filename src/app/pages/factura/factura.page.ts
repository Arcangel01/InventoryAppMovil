import { MenuController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../api/product.service';
import { NgForm } from '@angular/forms';
import { FacturaserviceService } from '../../api/facturaservice.service';
import { Factura } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.page.html',
  styleUrls: ['./factura.page.scss'],
})
export class FacturaPage implements OnInit {

  facturaM: Factura = new Factura();
  product: any;

  formModel = {
    documentO_C: [''],
    nombrE_C: [''],
    apellidO_C: [''],
    telefonO_C: [''],
    fecha: new Date().toISOString(),
    id_producto: '',
    cantidad: 0,
    precio: 0,
    subtotal: 0,
    total: 0
  };

  constructor(private serviceProd: ProductService, private toastController: ToastController,
              private facturarService: FacturaserviceService, private menuC: MenuController) { }

  ngOnInit() {
    this.getProd();
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      color,
      position: 'middle',
      duration: 2000
    });
    toast.present();
  }

 factura(form: NgForm) {

    if (form.invalid) { return; }
    this.facturaM = form.value;
    this.facturarService.postFacturas(this.facturaM)
      .subscribe(res => {
        this.presentToast('Factura registrada', 'success');
      },
        err => {
          console.log(err);
          this.presentToast(err.name + ': ' + 'No se pudo registrar la factura', 'danger');
        });
    console.log(form.value);

  }

  menu() {
    this.menuC.toggle();
  }

  getProd() {
    this.serviceProd.getProduct()
      .subscribe(res => {
        this.product = res;
      },
        err => {
          console.log(err);
        });
  }

}
