import { Material } from './material';
import { Ray, Vector3 } from 'three';
import { ManipulacaoVetMat } from '../manipulacao-vet-mat';
import { HitRecord } from '../hit-record';


export class Vidro extends Material {
  _indiceRefrativo: number;
  private manipula = new ManipulacaoVetMat();

  /**
   * Representa o material vidro.
   * @constructor
   * @param {number} indiceRefrativo - índice refrativo do vidro.
   */
  constructor(indiceRefrativo: number) {
    super();
    this._indiceRefrativo = indiceRefrativo;
  }

  /**
   * Função que cria a representação de um raio incidente absorvido, atenuado.
   *
   * @param {Ray} ray - razão entre luz refletida e incidente.
   * @param {HitRecord} hitRecord - fator que randomiza a direção da reflexão.
   * @param {Vector3} attenuation - atenuação do raio de luz.
   * @param {Ray} scattered - raio de luz dispersados.
   */
  override scatter(ray: Ray, hitRecord: HitRecord, attenuation: Vector3, scattered: Ray) {
    let hitRecordNormal, frontFace, refractionRatio, cosseno;
    let reflected = this.reflect(ray.direction, hitRecord.normal);
    attenuation.x = 1;
    attenuation.y = 1;
    attenuation.z = 1;
    let refracted = this.manipula.criarVector3(0, 0, 0);
    if (this.manipula.calcularProdutoEscalarVec3(ray.direction, hitRecord.normal) > 0) {
      hitRecordNormal = this.manipula.multiplicarEscalarVec3(hitRecord.normal, -1);
      frontFace = this._indiceRefrativo;
      cosseno = this._indiceRefrativo * this.manipula.calcularProdutoEscalarVec3(ray.direction, hitRecord.normal) / ray.direction.length();
    } else {
      hitRecordNormal = hitRecord.normal;
      frontFace = 1 / this._indiceRefrativo;
      cosseno = -1 * this.manipula.calcularProdutoEscalarVec3(ray.direction, hitRecord.normal) / ray.direction.length();
    }
    if (this.refract(ray.direction, hitRecordNormal, frontFace, refracted)) {
      refractionRatio = this.schlick(cosseno);
    } else {
      scattered.origin = hitRecord.p;
      scattered.direction = reflected;
      refractionRatio = 1;
    }
    if(Math.random() < refractionRatio) {
      scattered.origin = hitRecord.p;
      scattered.direction = reflected;
    } else {
      scattered.origin = hitRecord.p;
      scattered.direction = refracted;
    }
    return true;
  }

  /**
   * Função que retorna o raio refletido.
   *
   * @param {Vector3} vectorV - vetor incidente.
   * @param {Vector3} vectorN - normal.
   */
  reflect(vectorV: Vector3, vectorN: Vector3) {
    let produtoEscalarVN = this.manipula.calcularProdutoEscalarVec3(vectorV, vectorN);
    return this.manipula.subtrairVetoresVec3(vectorV, this.manipula.multiplicarEscalarVec3(vectorN, 2 * produtoEscalarVN)); //vectorV - (2 * (vectorV.vectorN) * vectorN)
  }

  /**
   * Função que retorna o raio refratado.
   *
   * @param {Vector3} vectorV - vetor do raio incidente.
   * @param {Vector3} vectorN - normal.
   * @param {number} frontFace
   * @param {Vector3} refracted - vetor do raio refratado.
   */
  refract(vectorV: Vector3, vectorN: Vector3, frontFace: number, refracted: Vector3) {
    let vectorUV = this.manipula.multiplicarEscalarVec3(vectorV, 1/vectorN.length());
    let produtoEscalarVN = this.manipula.calcularProdutoEscalarVec3(vectorUV, vectorN);
    let discriminante = 1 - frontFace * frontFace * (1 - produtoEscalarVN * produtoEscalarVN);
    if (discriminante > 0) {
      let vectorTemp =
        this.manipula.subtrairVetoresVec3(
        this.manipula.multiplicarEscalarVec3(
        this.manipula.subtrairVetoresVec3(vectorUV,
        this.manipula.multiplicarEscalarVec3(vectorN, produtoEscalarVN)), frontFace), this.manipula.multiplicarEscalarVec3(vectorN, Math.sqrt(discriminante)));
      refracted.x = vectorTemp.x;
      refracted.y = vectorTemp.y;
      refracted.z = vectorTemp.z;
      return true;
    } else {
      return false;
    }
  }

  /**
   * Função que retorna a aproximação de Schlik para reflexão.
   *
   * @param {number} cosseno - cosseno do angulo entre a direção da luz incidente e a normal da interface
   */
  schlick(cosseno: number) {
    let iR0 = (1 - this._indiceRefrativo) / (1 + this._indiceRefrativo);
    iR0 = iR0 * iR0;
    return iR0 + (1 - iR0) * Math.pow((1 - cosseno), 5);
  }
}
