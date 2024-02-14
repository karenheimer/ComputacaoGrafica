import { Ray, Vector3 } from 'three';
import { HitRecord } from '../hit-record';


/**
 * Classe genérica para representar o material do qual o objeto é feito.
 */
export class Material {
  scatter(ray: Ray, hitRecord: HitRecord, attenuation: Vector3, scattered: Ray): boolean {
    return true;
  }
}
