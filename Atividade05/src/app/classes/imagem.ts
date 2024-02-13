import { Vector3 } from "three";

export class Imagem {
  private _pixelMatriz: Vector3[][];
  private _resolucao: number;
  private _resolucaox: number;
  private _resolucaoy: number;

  constructor(resolucaoX: number, resolucaoY: number) {
    this._resolucaox = resolucaoX;
    this._resolucaoy = resolucaoY;
    this._resolucao = 0;
    this._pixelMatriz = [];
  }

  get pixelMatriz(): Vector3[][] {
    return this._pixelMatriz;
  }

  get resolucao(): number {
    return this._resolucao;
  }

  get resolucaox(): number {
    return this._resolucaox;
  }

  get resolucaoy(): number {
    return this._resolucaoy;
  }

  getPixel(posicaoX: number, posicaoY: number) {
    if(posicaoX >= this._resolucaox || posicaoY >= this._resolucaoy) {
      throw new Error("Pixel não disponível");
    }
    return this._pixelMatriz[posicaoY][posicaoX];
  }

  adicionarPixel(pixelRGB: Vector3) {
    var posX = this._resolucao % this._resolucaox;
    var posY = Math.floor(this._resolucao / this._resolucaox);
    if(posY < this._resolucaoy) {
      if(posX === 0) {
        this._pixelMatriz.push([]);
      }
      this._pixelMatriz[posY].push(pixelRGB);
      this._resolucao += 1;
    } else {
      throw Error("Pixel Overflow");
    }
  }
}
