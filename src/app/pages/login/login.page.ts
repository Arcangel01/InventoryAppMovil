import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/api/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formModel = {
    UserName: '',
    Password: ''
  };
  constructor(private nav: NavController, private service: DataService) { }

  ngOnInit() {
  }

  login(form: NgForm) {

    if (form.invalid) { return; }
    /*   console.log(form.value);
      this.service.logueo(this.formModel.UserName, this.formModel.Password); */
    if (form) {
      this.nav.navigateRoot('home', { animated: true });
    }
  }

  irRegistro() {
    this.nav.navigateRoot('registro', { animated: true });
  }

}
