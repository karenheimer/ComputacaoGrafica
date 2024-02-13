import { ManipulacaoVetMat } from './manipulacao-vet-mat';
import {Matrix3, Matrix4, Vector2, Vector3, Vector4} from "three";
import {Matrix2} from "./matrix2";

describe('ManipulacaoVetMat', () => {
  let manip: ManipulacaoVetMat;
  beforeEach(() => {
    manip = new ManipulacaoVetMat();
  });

  it('should create an instance', () => {
    expect(new ManipulacaoVetMat()).toBeTruthy();
  });

  it('deve retornar um Vector2', () => {
    expect(manip.criarVector2(1, 1)).toEqual(new Vector2(1, 1));
  });

  it('deve retornar novo um Vector2 com o valor dado somado a cada um dos elementos do vetor original', () => {
    let v = new Vector2(1, 1);
    expect(manip.somarEscalarVec2(v, 1)).toEqual(new Vector2(2, 2));
    expect(v).toEqual(new Vector2(1, 1));
  });

  it('deve retornar um novo Vector2 com o valor dado multiplicado a cada um dos elementos do vetor original', () => {
    let v = new Vector2(1, 1);
    expect(manip.multiplicarEscalarVec2(v, 3)).toEqual(new Vector2(3, 3));
    expect(v).toEqual(new Vector2(1, 1));
  });

  it('deve retornar o produto escalar dos Vector2 dados', () => {
    let v1 = new Vector2(2, 2);
    let v2 = new Vector2(3, 3);
    expect(manip.calcularProdutoEscalarVec2(v1, v2)).toEqual(12);
  });

  it('deve retornar o produto vetorial dos Vector2 dados', () => {
    let v1 = new Vector2(2, 2);
    let v2 = new Vector2(3, 3);
    expect(manip.calcularProdutoVetorialVec2(v1, v2)).toEqual(0);
  });

  it('deve retornar um Vector3', () => {
    expect(manip.criarVector3(1, 1, 1)).toEqual(new Vector3(1, 1, 1));
  });

  it('deve retornar um novo Vector3 com a soma dos dois vetores dados', () => {
    let v1 = new Vector3(2, 2, 2);
    let v2 = new Vector3(3, 3, 3);
    expect(manip.somarVetoresVec3(v1, v2)).toEqual(new Vector3(5, 5, 5));
  });

  it('deve retornar um novo Vector3 com o valor dado somado a cada um dos elementos do vetor original', () => {
    let v = new Vector3(2, 2, 2);
    expect(manip.somarEscalarVec3(v, 2)).toEqual(new Vector3(4, 4, 4));
    expect(v).toEqual(new Vector3(2, 2, 2));
  });

  it('deve retornar um novo Vector3 com o valor dado multiplicado a cada um dos elementos do vetor original', () => {
    let v = new Vector3(1, 1, 1);
    expect(manip.multiplicarEscalarVec3(v, 3)).toEqual(new Vector3(3, 3, 3))
    expect(v).toEqual(new Vector3(1, 1, 1));

  });

  it('deve retornar o produto escalar dos Vector3 dados', () => {
    let v1 = new Vector3(2, 2, 2);
    let v2 = new Vector3(3, 3, 3);
    expect(manip.calcularProdutoEscalarVec3(v1, v2)).toEqual(18);
  });

  it('deve retornar um novo Vector3 com o produto vetorial dos Vector3 dados', () => {
    let v1 = new Vector3(2, 2, 2);
    let v2 = new Vector3(3, 3, 3);
    expect(manip.calcularProdutoVetorialVec3(v1, v2)).toEqual(new Vector3(0, 0, 0));
    expect(v1).toEqual(new Vector3(2, 2, 2));
    expect(v2).toEqual(new Vector3(3, 3, 3));
  });

  it('deve retornar um Vector4', () => {
    expect(manip.criarVector4(1, 1, 1, 1)).toEqual(new Vector4(1, 1, 1, 1));
  });

  it('deve retornar um novo Vector4 com a soma dos dois vetores dados', () => {
    let v1 = new Vector4(2, 2, 2, 2);
    let v2 = new Vector4(3, 3, 3, 3);
    expect(manip.somarVetoresVec4(v1, v2)).toEqual(new Vector4(5, 5, 5, 5));
  });

  it('deve retornar um novo Vector4 com o valor dado somado a cada um dos elementos do vetor original', () => {
    let v = new Vector4(2, 2, 2, 2);
    expect(manip.somarEscalarVec4(v, 2)).toEqual(new Vector4(4, 4, 4, 4));
    expect(v).toEqual(new Vector4(2, 2, 2, 2));
  });

  it('deve retornar um novo Vector4 com o valor dado multiplicado a cada um dos elementos do vetor original', () => {
    let v = new Vector4(1, 1, 1, 1);
    expect(manip.multiplicarEscalarVec4(v, 3)).toEqual(new Vector4(3, 3, 3, 3))
    expect(v).toEqual(new Vector4(1, 1, 1, 1));

  });

  it('deve retornar o produto escalar dos Vector4 dados', () => {
    let v1 = new Vector4(2, 2, 2, 2);
    let v2 = new Vector4(3, 3, 3, 3);
    expect(manip.calcularProdutoEscalarVec4(v1, v2)).toEqual(24);
  });

  it('deve retornar uma Matriz Identidade 2x2', () => {
    expect(manip.criarMatrizIdentidade2()).toEqual(new Matrix2(1, 0, 0, 1));
  });

  it('deve retornar uma Matriz 2x2 com os valores fornecidos', () => {
    expect(manip.criarMatriz2(1, 1, 1, 1)).toEqual(new Matrix2(1, 1, 1, 1));
  });

  it('deve retornar uma nova Matriz 2x2 com o resultado da soma de duas matrizes 2x2', () => {
    let m1 = new Matrix2(1, 1, 1, 1);
    let m2 = new Matrix2(2, 2, 2, 2);
    expect(manip.somarMatrizesMat2(m1, m2)).toEqual(new Matrix2(3, 3, 3, 3));
    expect(m1).toEqual(new Matrix2(1, 1, 1, 1));
    expect(m2).toEqual(new Matrix2(2, 2, 2, 2));
  });

  it('deve retornar uma nova Matriz 2x2 com o resultado da subtração de duas matrizes 2x2', () => {
    let m1 = new Matrix2(5, 5, 5, 5);
    let m2 = new Matrix2(2, 2, 2, 2);
    expect(manip.subtrairMatrizesMat2(m1, m2)).toEqual(new Matrix2(3, 3, 3, 3));
    expect(m1).toEqual(new Matrix2(5, 5, 5, 5));
    expect(m2).toEqual(new Matrix2(2, 2, 2, 2));
  });

  it('deve retornar uma nova Matriz 2x2 com o resultado da multiplicação de duas matrizes 2x2', () => {
    let m1 = new Matrix2(5, 5, 5, 5);
    let m2 = new Matrix2(2, 2, 2, 2);
    expect(manip.multiplicarMatrizesMat2(m1, m2)).toEqual(new Matrix2(10, 10, 10, 10));
    expect(m1).toEqual(new Matrix2(5, 5, 5, 5));
    expect(m2).toEqual(new Matrix2(2, 2, 2, 2));
  });

  it('deve retornar uma nova Matriz 2x2 com o resultado da multiplicação de uma matriz 2x2 por um escalar', () => {
    let m1 = new Matrix2(5, 5, 5, 5);
    expect(manip.multiplicarPorEscalarMat2(m1, 3)).toEqual(new Matrix2(15, 15, 15, 15));
    expect(m1).toEqual(new Matrix2(5, 5, 5, 5));
  });

  it('deve retornar uma nova Matriz 2x2 com o resultado da soma de uma matriz 2x2 com um escalar', () => {
    let m1 = new Matrix2(5, 5, 5, 5);
    expect(manip.somarEscalarMat2(m1, 3)).toEqual(new Matrix2(8, 8, 8, 8));
    expect(m1).toEqual(new Matrix2(5, 5, 5, 5));
  });

  it('deve retornar o determinante de uma Matriz 2x2', () => {
    let m1 = new Matrix2(5, 2, 2, 5);
    expect(manip.calcularDeterminanteMat2(m1)).toEqual(21);
  });

  it('deve retornar uma Matriz 2x2 inversa', () => {
    let m1 = new Matrix2(5, 2, 2, 5);
    expect(manip.inverterMat2(m1)).toEqual(new Matrix2(5/21, -2/21, -2/21, 5/21));
    expect(m1).toEqual(new Matrix2(5, 2, 2, 5));
  });

  it('deve retornar uma Matriz 2x2 transposta', () => {
    let m1 = new Matrix2(5, 2, 3, 1);
    expect(manip.transporMat2(m1)).toEqual(new Matrix2(5, 3, 2, 1));
    expect(m1).toEqual(new Matrix2(5, 2, 3, 1));
  });

  it('deve retornar uma Matriz Identidade 3x3', () => {
    expect(manip.criarMatrizIdentidade3()).toEqual(new Matrix3(1, 0, 0, 0, 1, 0, 0, 0, 1));
  });

  it('deve retornar uma Matriz 3x3 com os valores fornecidos', () => {
    expect(manip.criarMatriz3(1, 2, 3, 4, 5, 6, 7, 8, 9)).toEqual(new Matrix3(1, 2, 3, 4, 5, 6, 7, 8, 9));
  });

  it('deve retornar uma nova Matriz 3x3 com o resultado da multiplicação de duas matrizes 3x3', () => {
    let m1 = new Matrix3(1, 2, 3, 1, 2, 3, 1, 2, 3);
    let m2 = new Matrix3(2, 2, 2, 2, 2, 2, 2, 2, 2);
    expect(manip.multiplicarMatrizesMat3(m1, m2)).toEqual(new Matrix3(12, 12, 12, 12, 12, 12, 12, 12, 12));
    expect(m1).toEqual(new Matrix3(1, 2, 3, 1, 2, 3, 1, 2, 3));
    expect(m2).toEqual(new Matrix3(2, 2, 2, 2, 2, 2, 2, 2, 2));
  });

  it('deve retornar uma nova Matriz 3x3 com o resultado da multiplicação de uma matriz 3x3 por um escalar', () => {
    let m1 = new Matrix3(1, 2, 3, 1, 2, 3, 1, 2, 3);
    expect(manip.multiplicarPorEscalarMat3(m1, 2)).toEqual(new Matrix3(2, 4, 6, 2, 4, 6, 2, 4, 6));
    expect(m1).toEqual(new Matrix3(1, 2, 3, 1, 2, 3, 1, 2, 3));
  });

  it('deve retornar o determinante de uma Matriz 3x3', () => {
    let m1 = new Matrix3(1, 2, 3, 1, 2, 3, 1, 2, 3);
    expect(manip.calcularDeterminanteMat3(m1)).toEqual(0);
  });

  it('deve retornar uma Matriz 3x3 inversa', () => {
    let m1 = new Matrix3(1, 4, 5, 2, 3, 3, 1, 2, 3);
    expect(manip.inverterMat3(m1)).toEqual(new Matrix3(-3/4, 1/2, 3/4, 3/4, 1/2, -7/4, -1/4, -1/2, 5/4));
    expect(m1).toEqual(new Matrix3(1, 4, 5, 2, 3, 3, 1, 2, 3));

  });

  it('deve retornar uma Matriz 3x3 transposta', () => {
    let m1 = new Matrix3(1, 4, 5, 2, 3, 3, 1, 2, 3);
    expect(manip.tranporMat3(m1)).toEqual(new Matrix3(1, 2, 1, 4, 3, 2, 5, 3, 3));
    expect(m1).toEqual(new Matrix3(1, 4, 5, 2, 3, 3, 1, 2, 3));
  });

  it('deve retornar uma Matriz Identidade 4x4', () => {
    expect(manip.criarMatrizIdentidade4()).toEqual(new Matrix4(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1));
  });

  it('deve retornar uma Matriz 4x4 com os valores fornecidos', () => {
    expect(manip.criarMatriz4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)).toEqual(new Matrix4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16));
  });

  it('deve retornar uma nova Matriz 4x4 com o resultado da multiplicação de duas matrizes 4x4', () => {
    let m1 = new Matrix4(1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4);
    let m2 = new Matrix4(2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2);
    expect(manip.multiplicarMatrizesMat4(m1, m2)).toEqual(new Matrix4(20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20));
    expect(m1).toEqual(new Matrix4(1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4));
    expect(m2).toEqual(new Matrix4(2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2));
  });

  it('deve retornar uma nova Matriz 4x4 com o resultado da multiplicação de uma matriz 4x4 por um escalar', () => {
    let m1 = new Matrix4(1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4);
    expect(manip.multiplicarPorEscalarMat4(m1, 2)).toEqual(new Matrix4(2, 4, 6, 8, 2, 4, 6, 8, 2, 4, 6, 8, 2, 4, 6, 8));
    expect(m1).toEqual(new Matrix4(1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4));
  });

  it('deve retornar o determinante de uma Matriz 4x4', () => {
    let m1 = new Matrix4(1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4);
    expect(manip.calcularDeterminanteMat4(m1)).toEqual(0);
  });

  it('deve retornar uma Matriz 4x4 inversa', () => {
    let m1 = new Matrix4(1, 2, 1, 1, 2, 2, 3, 2, 3, 1, 3, 3, 3, 4, 4, 4);
    expect(manip.inverterMat4(m1)).toEqual(new Matrix4(8/5, 0, 4/5, -1, 3/5, 0, -1/5, 0, -4/5, 1, -2/5, 0, -1, -1, 0, 1));
    expect(m1).toEqual(new Matrix4(1, 2, 1, 1, 2, 2, 3, 2, 3, 1, 3, 3, 3, 4, 4, 4));
  });

  it('deve retornar uma Matriz 4x4 transposta', () => {
    let m1 = new Matrix4(1, 2, 1, 1, 2, 2, 3, 2, 3, 1, 3, 3, 3, 4, 4, 4);
    expect(manip.tranporMat4(m1)).toEqual(new Matrix4(1, 2, 3, 3, 2, 2, 1, 4, 1, 3, 3, 4, 1, 2, 3, 4));
    expect(m1).toEqual(new Matrix4(1, 2, 1, 1, 2, 2, 3, 2, 3, 1, 3, 3, 3, 4, 4, 4));
  });
});
