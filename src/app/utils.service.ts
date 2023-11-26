import { Injectable } from '@angular/core';

import { surpriseMePrompts } from './constants/constants'; // Make sure to adjust the path based on your project structure

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  getRandomPrompt(prompt: string): string {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    let randomPrompt = surpriseMePrompts[randomIndex];

    if (randomPrompt === prompt) {
      randomPrompt = this.getRandomPrompt(prompt);
    }

    return randomPrompt;
  }

  // async downloadImage(_id: string, photo: string): Promise<void> {
  //   const blob = this.dataURLtoBlob(photo);
  //   FileSaver.saveAs(blob, `download-${_id}.jpg`);
  // }

  private dataURLtoBlob(dataURL: string): Blob {
    const byteString = atob(dataURL.split(',')[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }

    return new Blob([arrayBuffer], { type: 'image/jpeg' });
  }
}
