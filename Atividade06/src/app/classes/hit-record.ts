import { Vector3 } from 'three';
import { Material } from './Material/material';
import { ManipulacaoVetMat } from './manipulacao-vet-mat';


/**
 * Estrutura genérica para guardar qualquer coisa que possa ser atingida por um raio.
 */
export class HitRecord {
  manipula = new ManipulacaoVetMat();
  _t: number;
  _p: Vector3;
  _normal: Vector3;
  _material: Material;

  constructor() {
    this._t = 0;
    this._p = this.manipula.criarVector3(0, 0, 0);
    this._normal = this.manipula.criarVector3(0, 0, 0);
    this._material = new Material();
  }

  get t() {
    return this._t;
  }

  get p() {
    return this._p;
  }

  get normal() {
    return this._normal;
  }

  get material() {
    return this._material;
  }

  set t(t) {
    this._t = t;
  }

  set p(p) {
    this._p = p;
  }

  set normal(normal) {
    this._normal = normal;
  }

  set material(material) {
    this._material = material;
  }
}
