import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Componente, Admin } from '../interfaces/interface';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  token: string = null;
  URL = 'https://localhost:44394/api/user/login';

  constructor(private http: HttpClient, private storage: Storage, private toastCtrl: ToastController) { }

  async presentToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message,
      color,
      position: 'middle',
      duration: 2000
    });
    toast.present();
  }

  // Iniciar Sesion
  logueo(user: string, password: string) {
    const data = { user, password };
    return this.http.post(this.URL, data)
      .subscribe(res => {
      },
      err => {
        console.log(err);
      });
  }

  // Registrar Usuario
  postUser(admin: Admin) {
    this.http.post('https://localhost:44394/api/user/register', admin)
      .subscribe(res => {
        this.presentToast('Registro realizado, diríjase al login', 'success');
      },
        err => {
          this.presentToast('No se pudo registrar este usuario', 'danger');
          console.log(err);
        });
  }

  getMenuOpts() {
    return this.http.get<Componente[]>('../../assets/data/menu.json');
  }
}
