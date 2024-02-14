import { Material } from './material';
import { Ray, Vector3 } from 'three';
import { ManipulacaoVetMat } from '../manipulacao-vet-mat';
import { HitRecord } from '../hit-record';

export class Metal extends Material {
  _albedo: Vector3;
  _fuzz: number;
  private manipula = new ManipulacaoVetMat();

  /**
   * Representa o material metal.
   * @constructor
   * @param {Vector3} albedo - razão entre luz refletida e incidente.
   * @param {number} fuzz - fator que randomiza a direção da reflexão.
   */
  constructor(albedo: Vector3, fuzz: number) {
    super();
    this._albedo = albedo;
    if(fuzz) {
      this._fuzz = fuzz < 1 ? fuzz : 1;
    } else {
      this._fuzz = 0;
    }
  }

  /**
   * Função que cria a representação de um raio incidente absorvido, atenuado.
   *
   * @param {Ray} ray - razão entre luz refletida e incidente.
   * @param {HitRecord} hitRecord - fator que randomiza a direção da reflexão.
   * @param {Vector3} attenuation - atenuação do raio de luz.
   * @param {Ray} scattered - raio de luz dispersados.
   */
  override scatter(ray: Ray, hitRecord: HitRecord, attenuation: Vector3, scattered: Ray): boolean {
    let scatterDirection = this.reflect(this.manipula.multiplicarEscalarVec3(ray.direction, 1/ray.direction.length()), hitRecord.normal);
    scattered.origin = hitRecord.p;
    scattered.direction = this.manipula.somarVetoresVec3(scatterDirection, this.manipula.multiplicarEscalarVec3(this.randomInUnitSphere(), this._fuzz));
    attenuation.x = this._albedo.x;
    attenuation.y = this._albedo.y;
    attenuation.z = this._albedo.z;
    return this.manipula.calcularProdutoEscalarVec3(scattered.direction, hitRecord.normal) > 0;
  }

  /**
   * Função que retorna o raio refletido.
   *
   * @param {Vector3} vectorV - vetor incidente.
   * @param {Vector3} vectorN - normal.
   */
  reflect(vectorV: Vector3, vectorN: Vector3): Vector3 {
    let produtoEscalarVN = this.manipula.calcularProdutoEscalarVec3(vectorV, vectorN);
    return this.manipula.subtrairVetoresVec3(vectorV, this.manipula.multiplicarEscalarVec3(vectorN,2 * produtoEscalarVN));
  }

  /**
   * Função que retorna um vetor aleatório dentro de uma esfera.
   */
  randomInUnitSphere(): Vector3 {
    let vector;
    do {
      let vectorTemp = this.manipula.criarVector3(Math.random(), Math.random(), Math.random());
      vector = this.manipula.subtrairVetoresVec3(this.manipula.multiplicarEscalarVec3(vectorTemp, 2), this.manipula.criarVector3(1, 1, 1));
    } while ((vector.length() * vector.length()) >= 1);
    return vector;
  }
}
