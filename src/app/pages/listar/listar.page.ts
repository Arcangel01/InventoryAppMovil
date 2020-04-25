import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../api/product.service';
import { Product } from '../../interfaces/interface';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  product: Product;

  constructor(private service: ProductService, private menuC: MenuController) { }

  ngOnInit() {

    this.service.getProduct()
    .subscribe(res => {
      this.product = res;
    },
    err => {
      console.log(err);
    });
  }

  menu() {
    this.menuC.toggle();
  }

}
