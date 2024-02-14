import { Ray } from 'three';
import { HitRecord } from './hit-record';

/**
 * Classe genérica para representar qualquer coisa que possa ser atingida por um raio.
 */
export class Hittable {
  hit(ray: Ray, rayTmin: number, rayTmax: number, hitRecord: HitRecord): boolean {
    return true;
  };
}
