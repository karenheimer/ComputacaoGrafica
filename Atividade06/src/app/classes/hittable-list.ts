import { Hittable } from './hittable';
import { Ray } from 'three';
import { HitRecord } from './hit-record';

/**
 * Classe que armazena uma lista de Hittables.
 */
export class HittableList extends Hittable {
  _list: Hittable[];
  /**
   * Representa uma lista de Hittables.
   * @constructor
   */
  constructor(listHitable: Hittable[]) {
    super();
    this._list = listHitable || [];
  }

  get size () {
    return this._list.length;
  }

  /**
   * Calcula se o objeto será atingido pelo raio especificado
   * @param {Ray} ray - raio de luz.
   * @param {number} rayTmin - início do intervalo de onde o raio pode atingir.
   * @param {number} rayTmax - final do intervalo de onde o raio pode atingir.
   * @param {HitRecord} hitRecord - armazenamento dos locais atingidos.
   */
  override hit(ray: Ray, rayTmin: number, rayTmax: number, hitRecord: HitRecord): boolean {
    let hasHitSomething = false;
    let closestHit = rayTmax;
    for(let i = 0; i < this._list.length; i++) {
      if(this._list[i].hit(ray, rayTmin, closestHit, hitRecord)) {
        hasHitSomething = true;
        closestHit = hitRecord.t;
      }
    }
    return hasHitSomething;
  }
}
