import { Matrix3, Matrix4, Vector2, Vector3, Vector4 } from "three";
import { Matrix2 } from "./matrix2";

export class ManipulacaoVetMat {
  /**
   * Cria um Vec2 com as coordenadas informadas
   * @returns {Vector2} Novo Vec2
   */
  criarVector2(x: number, y: number): Vector2 {
    return new Vector2(x, y);
  }

  /**
   * Soma dois vetores Vec2
   * @returns {Vector2} Novo Vec2 com o resultado da operação
   */
  somarVetoresVec2(v1: Vector2, v2: Vector2): Vector2 {
    return new Vector2().addVectors(v1, v2);
  }

  /**
   * Soma um vetor Vec2 com um escalar
   * @returns {Vector2} Novo Vec2 com o resultado da operação
   */
  somarEscalarVec2(v: Vector2, n: number): Vector2 {
    return v.clone().addScalar(n);
  }

  /**
   * Multiplica um vetor Vec2 com um escalar
   * @returns {Vector2} Novo Vec2 com o resultado da operação
   */
  multiplicarEscalarVec2(v: Vector2, n: number): Vector2 {
    return v.clone().multiplyScalar(n);
  }

  /**
   * Calcula o produto escalar de dois vetores Vec2
   * @returns {number} Valor do produto escalar
   */
  calcularProdutoEscalarVec2(v1: Vector2, v2: Vector2): number {
    return v1.dot(v2);
  }

  /**
   * Calcula o produto vetorial de dois vetores Vec2
   * @returns {number} Valor da multiplicação
   */
  calcularProdutoVetorialVec2(v1: Vector2, v2:Vector2): number {
    return v1.cross(v2);
  }

  /**
   * Cria um Vec3 com as coordenadas informadas
   */
  criarVector3(x: number, y: number, z: number): Vector3 {
    return new Vector3(x, y, z);
  }

  /**
   * Soma dois vetores Vec3
   * @returns {Vector3} Novo Vec3 com o resultado da operação
   */
  somarVetoresVec3(v1: Vector3, v2: Vector3): Vector3 {
    return new Vector3().addVectors(v1, v2);
  }

  /**
   * Soma um vetor Vec3 com um escalar
   * @returns {Vector3} Novo Vec3 com o resultado da operação
   */
  somarEscalarVec3(v: Vector3, n: number): Vector3 {
    return v.clone().addScalar(n);
  }

  /**
   * Multiplica um vetor Vec3 com um escalar
   * @returns {Vector3} Novo Vec3 com o resultado da operação
   */
  multiplicarEscalarVec3(v: Vector3, n: number): Vector3 {
    return v.clone().multiplyScalar(n);
  }

  /**
   * Calcula o produto escalar de dois vetores Vec3
   * @returns {number} Valor do produto escalar
   */
  calcularProdutoEscalarVec3(v1: Vector3, v2: Vector3): number {
    return v1.dot(v2);
  }

  /**
   * Calcula o produto vetorial de dois vetores Vec3
   * @returns {Vector3} Vec3 com o resultado da multiplicação
   */
  calcularProdutoVetorialVec3(v1: Vector3, v2:Vector3): Vector3 {
    return new Vector3().crossVectors(v1, v2);
  }

  /**
   * Cria um Vec4 com as coordenadas informadas
   */
  criarVector4(x: number, y: number, z: number, w: number): Vector4 {
    return new Vector4(x, y, z, w);
  }

  /**
   * Soma dois vetores 4
   * @returns {Vector4} Novo Vec4 com o resultado da operação
   */
  somarVetoresVec4(v1: Vector4, v2: Vector4): Vector4 {
    return new Vector4().addVectors(v1, v2);
  }

  /**
   * Soma um vetor Vec4 com um escalar
   * @returns {Vector4} Novo Vec4 com o resultado da operação
   */
  somarEscalarVec4(v: Vector4, n: number): Vector4 {
    return v.clone().addScalar(n);
  }

  /**
   * Multiplica um vetor Vec4 com um escalar
   * @returns {Vector4} Novo Vec4 com o resultado da operação
   */
  multiplicarEscalarVec4(v: Vector4, n: number): Vector4 {
    return v.clone().multiplyScalar(n);
  }

  /**
   * Calcula o produto escalar de dois vetores Vec4
   * @returns {number} Valor do produto escalar
   */
  calcularProdutoEscalarVec4(v1: Vector4, v2: Vector4): number {
    return v1.dot(v2);
  }

  /**
   * Cria uma matriz identidade 2x2
   * @returns {Matrix2} Nova matriz identidade Mat2
   */
  criarMatrizIdentidade2(): Matrix2 {
    return new Matrix2();
  }

  /**
   * Cria uma matriz 2x2 com os valores informados
   * @returns {Matrix2} Nova matriz Mat2
   */
  criarMatriz2(n11: number, n12: number,
               n21: number, n22: number): Matrix2 {
    return new Matrix2(n11, n12, n21, n22);
  }

  /**
   * Soma duas matrizes Mat2
   * @returns {Matrix2} Nova matriz Mat2 com o resultado da operação
   */
  somarMatrizesMat2(m1: Matrix2, m2: Matrix2): Matrix2 {
    return new Matrix2().somarMatrizes(m1, m2);
  }

  /**
   * Subtrai duas matrizes Mat2
   * @returns {Matrix2} Nova matriz Mat2 com o resultado da operação
   */
  subtrairMatrizesMat2(m1: Matrix2, m2: Matrix2): Matrix2 {
    return new Matrix2().subtrairMatrizes(m1, m2);
  }

  /**
   * Multiplica duas matrizes Mat2
   * @returns {Matrix2} Nova matriz Mat2 com o resultado da operação
   */
  multiplicarMatrizesMat2(m1: Matrix2, m2: Matrix2): Matrix2 {
    return new Matrix2().multiplicarMatrizes(m1, m2);
  }

  /**
   * Multiplica matriz Mat2 por escalar
   * @returns {Matrix2} Nova matriz Mat2 com o resultado da operação
   */
  multiplicarPorEscalarMat2(m1: Matrix2, escalar: number): Matrix2 {
    return new Matrix2().multiplicarEscalar(m1, escalar);
  }

  /**
   * Soma um escalar a uma matriz Mat2
   * @returns {Matrix2} Nova matriz Mat2 com o resultado da operação
   */
  somarEscalarMat2(m: Matrix2, escalar: number): Matrix2 {
    return new Matrix2().somarEscalar(m, escalar);
  }

  /**
   * Calcula o determinante de uma matriz Mat2
   * @returns {number} Resultado da operação
   */
  calcularDeterminanteMat2(m: Matrix2): number {
    return m.calcularDeterminante();
  }

  /**
   * Inverte uma matriz Mat2
   * @returns {Matrix2} Nova matriz Mat2 com o resultado da operação
   */
  inverterMat2(m: Matrix2): Matrix2 {
    return new Matrix2().inverter(m);
  }

  /**
   * Transpõe uma matriz Mat2
   * @returns {Matrix2} Nova matriz Mat2 com o resultado da operação
   */
  transporMat2(m: Matrix2): Matrix2 {
    return new Matrix2().transpor(m);
  }

  /**
   * Cria uma matriz identidade 3x3
   */
  criarMatrizIdentidade3(): Matrix3 {
    return new Matrix3();
  }

  /**
   * Cria uma matriz 3x3 com os valores informados
   */
  criarMatriz3(n11: number, n12: number, n13: number,
               n21: number, n22: number, n23: number,
               n31: number, n32: number, n33: number): Matrix3 {
    return new Matrix3(n11, n12, n13,
      n21, n22, n23,
      n31, n32, n33);
  }

  /**
   * Multiplica duas matrizes Mat3
   * @returns {Matrix3} Nova matriz Mat3 com o resultado da operação
   */
  multiplicarMatrizesMat3(m1: Matrix3, m2: Matrix3): Matrix3 {
    return new Matrix3().multiplyMatrices(m1, m2);
  }

  /**
   * Multiplica matriz Mat3 por escalar
   * @returns {Matrix3} Nova matriz Mat3 com o resultado da operação
   */
  multiplicarPorEscalarMat3(m1: Matrix3, escalar: number): Matrix3 {
    return m1.clone().multiplyScalar(escalar);
  }

  /**
   * Calcula o determinante de uma matriz Mat3
   * @returns {number} Resultado da operação
   */
  calcularDeterminanteMat3(m: Matrix3): number {
    return m.determinant();
  }

  /**
   * Inverte uma matriz Mat3
   * @returns {Matrix3} Nova matriz Mat3 com o resultado da operação
   */
  inverterMat3(m: Matrix3): Matrix3 {
    return m.clone().invert();
  }

  /**
   * Transpõe uma matriz Mat3
   * @returns {Matrix3} Nova matriz Mat3 com o resultado da operação
   */
  tranporMat3(m: Matrix3): Matrix3 {
    return m.clone().transpose();
  }

  /**
   * Cria uma matriz identidade 4x4
   */
  criarMatrizIdentidade4(): Matrix4 {
    return new Matrix4();
  }

  /**
   * Cria uma matriz 4x4 com os valores informados
   */
  criarMatriz4(n11: number, n12: number, n13: number, n14: number,
               n21: number, n22: number, n23: number, n24: number,
               n31: number, n32: number, n33: number, n34: number,
               n41: number, n42: number, n43: number, n44: number): Matrix4 {
    return new Matrix4(n11, n12, n13, n14,
      n21, n22, n23, n24,
      n31, n32, n33, n34,
      n41, n42, n43, n44);
  }

  /**
   * Multiplica duas matrizes Mat4
   * @returns {Matrix4} Nova matriz Mat4 com o resultado da operação
   */
  multiplicarMatrizesMat4(m1: Matrix4, m2: Matrix4): Matrix4 {
    return new Matrix4().multiplyMatrices(m1, m2);
  }

  /**
   * Multiplica matriz Mat4 por escalar
   * @returns {Matrix4} Nova matriz Mat4 com o resultado da operação
   */
  multiplicarPorEscalarMat4(m1: Matrix4, escalar: number): Matrix4 {
    return m1.clone().multiplyScalar(escalar);
  }

  /**
   * Calcula o determinante de uma matriz Mat4
   * @returns {number} Resultado da operação
   */
  calcularDeterminanteMat4(m: Matrix4): number {
    return m.determinant();
  }

  /**
   * Inverte uma matriz Mat4
   * @returns {Matrix4} Nova matriz Mat4 com o resultado da operação
   */
  inverterMat4(m: Matrix4): Matrix4 {
    return m.clone().invert();
  }

  /**
   * Transpõe uma matriz Mat4
   * @returns {Matrix4} Nova matriz Mat4 com o resultado da operação
   */
  tranporMat4(m: Matrix4): Matrix4 {
    return m.clone().transpose();
  }
}
