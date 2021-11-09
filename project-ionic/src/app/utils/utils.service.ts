import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private toastCtrl: ToastController) { }

  async presentToast(message: string, color: 'success'|'danger', duration = 5000) {
    const toast = await this.toastCtrl.create({
      message:  message,
      duration: duration,
      color: color
    });

    toast.present();
  }
}
