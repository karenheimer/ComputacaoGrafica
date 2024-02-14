import { Hittable } from './hittable';
import { Ray, Vector3 } from 'three';
import { Material } from './Material/material';
import { HitRecord } from './hit-record';
import { ManipulacaoVetMat } from './manipulacao-vet-mat';

export class Esfera extends Hittable {
  _center: Vector3;
  _radius: number;
  _material: Material;
  private manipula = new ManipulacaoVetMat();

  constructor(vectorCenter: Vector3, radius: number, material: Material) {
    super();
    this._center = vectorCenter;
    this._radius = radius;
    this._material = material;
  }

  /**
   * Calcula se o objeto será atingido pelo raio especificado
   * @param {Ray} ray - raio de luz.
   * @param {number} rayTmin - início do intervalo de onde o raio pode atingir.
   * @param {number} rayTmax - final do intervalo de onde o raio pode atingir.
   * @param {HitRecord} hitRecord - armazenamento dos locais atingidos.
   */
  override hit(ray: Ray, rayTmin: number, rayTmax: number, hitRecord: HitRecord): boolean {
    let originCenter = this.manipula.subtrairVetoresVec3(this.manipula.criarVector3(0, 0, 0), this._center);
    let a = this.manipula.calcularProdutoEscalarVec3(ray.direction, ray.direction);
    let b = this.manipula.calcularProdutoEscalarVec3(originCenter, ray.direction);
    let c = this.manipula.calcularProdutoEscalarVec3(originCenter, originCenter) - (this._radius * this._radius);
    let discriminante = (b*b) - (a*c);
    if (discriminante > 0) {
      let temp = ((-1 * b) - Math.sqrt(discriminante)) / a;
      if(temp < rayTmax && temp > rayTmin) {
        return this.assignHitRecord(temp, this._center, this._radius, this._material, ray, hitRecord);
      }
      temp = ((-1 * b) + Math.sqrt(discriminante)) / a;
      if(temp < rayTmax && temp > rayTmin) {
        return this.assignHitRecord(temp, this._center, this._radius, this._material, ray, hitRecord);
      }
    }
      return false;
  }

  /**
   * Função que adiciona o incidência do raio ao registro
   * @param {number} valor
   * @param {Vector3} center - centro da esfera
   * @param {number} radius - raio da esfera
   * @param {Material} material - material da esfera
   * @param {Ray} ray - raio de luz.
   * @param {HitRecord} hitRecord - registro de incidências
   */
  assignHitRecord(valor: number, center: Vector3, radius: number, material: Material, ray: Ray, hitRecord: HitRecord) {
    hitRecord.t = valor;
    hitRecord.p = this.manipula.somarVetoresVec3(ray.origin, this.manipula.multiplicarEscalarVec3(ray.direction, hitRecord.t));
    hitRecord.normal = this.manipula.multiplicarEscalarVec3(this.manipula.subtrairVetoresVec3(hitRecord.p, center), 1/radius);
    hitRecord.material = material;
    return true;
  }
}
