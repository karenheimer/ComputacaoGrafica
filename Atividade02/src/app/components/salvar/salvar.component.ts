import { Component, Input } from '@angular/core';

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
  salvarImagem() {
    const canvas =  document.getElementById(this.canvasId) as HTMLCanvasElement;
    if(canvas) {
      const image = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = image.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
      a.download= this.canvasId + ".png";
      a.click();
    }
  }
}
