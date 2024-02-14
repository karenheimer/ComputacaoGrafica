import { Vector3 } from "three";

export class Imagem {
  private _pixelMatriz: Vector3[][];
  private _resolucao: number;
  private _resolucaox: number;
  private _resolucaoy: number;

  /**
   * Representa uma imagem.
   * @constructor
   */
  constructor(resolucaoX: number, resolucaoY: number) {
    this._resolucaox = resolucaoX;
    this._resolucaoy = resolucaoY;
    this._resolucao = 0;
    this._pixelMatriz = [];
  }

  /**
   * Matriz de Vector3 para armazenamento dos pixels da imagem.
   */
  get pixelMatriz(): Vector3[][] {
    return this._pixelMatriz;
  }

  get resolucao(): number {
    return this._resolucao;
  }

  /**
   * Tamanho da imagem no eixo X
   */
  get resolucaox(): number {
    return this._resolucaox;
  }

  /**
   * Tamanho da imagem no eixo Y
   */
  get resolucaoy(): number {
    return this._resolucaoy;
  }

  /**
   * Função que adiciona o pixel a matriz da imagem
   * @param {Vector3} pixelRGB - vector3 com uma cor que representa o pixel a ser adicionado na imagem.
   */
  adicionarPixel(pixelRGB: Vector3) {
    let posX = this._resolucao % this._resolucaox;
    let posY = Math.floor(this._resolucao / this._resolucaox);
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
