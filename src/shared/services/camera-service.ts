
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})

export class CameraService {

  constructor(  ) {
  }

  uploadImage() {
   return new Promise((resolve, reject) => {
       Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt,
        correctOrientation: true,
        quality: 100
      }).then((image) => {
          resolve(image.dataUrl);
      }).catch((error:any)=>{
          reject(error)
      })
    })
  }


}
