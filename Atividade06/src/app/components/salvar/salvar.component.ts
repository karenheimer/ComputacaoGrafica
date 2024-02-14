import { Component, Input } from '@angular/core';
import {Imagem} from "../../classes/imagem";
import Jimp from 'jimp/browser/lib/jimp.js';
import {Vector3} from "three";

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.component.html',
  styleUrl: './salvar.component.css'
})
export class SalvarComponent {
  /**
   * Id do canvas que será salvo como imagem
   */
  @Input() canvasId = "";

  /**
   * Função que uso o Id do canvas e salva a imagem mostrada em um arquivo png
   */
  salvarImagemCanvas() {
    const canvas =  document.getElementById(this.canvasId) as HTMLCanvasElement;
    if(canvas) {
      const image = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = image.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
      a.download = this.canvasId + ".png";
      a.click();
    }
  }

  /**
   * Função que gera uma imagem a partir da matriz de pixels e a exibe na canvas
   * @param {Imagem} imagem imagem que possui um matriz com as informações de cores de cada pixel
   */
  gerarImagem(imagem: Imagem) {
    const canvas =  document.getElementById("canvas-esfera") as HTMLCanvasElement;
    let imagemJimp = new Jimp(imagem.resolucaox, imagem.resolucaoy, (erro: any, _imagem) => {
      if (erro) {
        throw erro;
      }
      imagem.pixelMatriz.forEach((pixelRow: Vector3[], y: number): void => {
        pixelRow.forEach((pixel: Vector3, x: number): void => {
          let color = Jimp.rgbaToInt((pixel.x * 255), (pixel.y * 255), (pixel.z * 255), 255, (a, v) => {})
          _imagem.setPixelColor(color, x, y, () => {});
        });
      });
      _imagem.getBase64Async(Jimp.MIME_PNG).then((base) => {
        let img = new Image(imagemJimp.bitmap.width, imagemJimp.bitmap.height);
        img.src = base;
        img.onload = () => {
          if (canvas && canvas.getContext("2d")) {
            canvas.getContext("2d")!.drawImage(img, 0, 0)
          }
        }
      });
    });
  }
}
