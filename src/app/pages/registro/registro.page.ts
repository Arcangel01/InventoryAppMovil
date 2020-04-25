import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Admin } from '../../interfaces/interface';
import { DataService } from '../../api/data.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formModel: Admin = {
    FullName: '',
    UserName: '',
    Email: '',
    Phone: '',
    Password: ''
  };

  constructor(private nav: NavController, private service: DataService) { }

  ngOnInit() {
  }

  registrarUser(Fregistro: NgForm) {
    if (Fregistro.invalid) { return; }
    this.service.postUser(this.formModel);
    Fregistro.reset();
  }

  irLogin() {
    this.nav.navigateRoot('login', {animated: true});
  }

}
