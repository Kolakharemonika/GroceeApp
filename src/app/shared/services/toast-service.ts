import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})

export class ToastService {
  constructor(private toastController: ToastController) {}

  async showSuccess(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      icon: "checkmark",
      color: 'success',
      position: position,
    });

    await toast.present();
  }
  async showError(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      icon: "close",
      color: 'danger',
      position: position,
    });

    await toast.present();
  }
}
