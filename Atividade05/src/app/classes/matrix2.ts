export class Matrix2 {
  matrix2: Array<Array<number>>;
  constructor(n11?: number, n12?: number,
              n21?: number, n22?: number) {
    this.matrix2 = new Array<Array<number>>;
    this.matrix2 = new Array<Array<number>>();
    this.matrix2[0] = new Array<number>();
    this.matrix2[1] = new Array<number>();
    this.matrix2[0][0] = n11 ?? 1;
    this.matrix2[0][1] = n12 ?? 0;
    this.matrix2[1][0] = n21 ?? 0;
    this.matrix2[1][1] = n22 ?? 1;
  }

  somarMatrizes(m1: Matrix2, m2: Matrix2): Matrix2 {
    let m3 = new Matrix2();
    m3.matrix2[0][0] = m1.matrix2[0][0] + m2.matrix2[0][0];
    m3.matrix2[0][1] = m1.matrix2[0][1] + m2.matrix2[0][1];
    m3.matrix2[1][0] = m1.matrix2[1][0] + m2.matrix2[1][0];
    m3.matrix2[1][1] = m1.matrix2[1][1] + m2.matrix2[1][1];
    return m3;
  }

  subtrairMatrizes(m1: Matrix2, m2: Matrix2): Matrix2 {
    let m3 = new Matrix2();
    m3.matrix2[0][0] = m1.matrix2[0][0] - m2.matrix2[0][0];
    m3.matrix2[0][1] = m1.matrix2[0][1] - m2.matrix2[0][1];
    m3.matrix2[1][0] = m1.matrix2[1][0] - m2.matrix2[1][0];
    m3.matrix2[1][1] = m1.matrix2[1][1] - m2.matrix2[1][1];
    return m3;
  }

  multiplicarMatrizes(m1: Matrix2, m2: Matrix2): Matrix2 {
    let m3 = new Matrix2();
    m3.matrix2[0][0] = m1.matrix2[0][0] * m2.matrix2[0][0];
    m3.matrix2[0][1] = m1.matrix2[0][1] * m2.matrix2[0][1];
    m3.matrix2[1][0] = m1.matrix2[1][0] * m2.matrix2[1][0];
    m3.matrix2[1][1] = m1.matrix2[1][1] * m2.matrix2[1][1];
    return m3;
  }

  somarEscalar(m: Matrix2, escalar: number): Matrix2 {
    let m3 = new Matrix2();
    m3.matrix2[0][0] = m.matrix2[0][0] + escalar;
    m3.matrix2[0][1] = m.matrix2[0][1] + escalar;
    m3.matrix2[1][0] = m.matrix2[1][0] + escalar;
    m3.matrix2[1][1] = m.matrix2[1][1] + escalar;
    return m3;
  }

  calcularDeterminante(): number {
    return (this.matrix2[0][0] * this.matrix2[1][1]) - (this.matrix2[0][1] * this.matrix2[1][0]);
  }

  inverter(m1: Matrix2): Matrix2 {
    let m = new Matrix2();
    let det = m1.calcularDeterminante();
    m.matrix2[0][0] = m1.matrix2[1][1]*(1/det);
    m.matrix2[0][1] = -(m1.matrix2[0][1]*(1/det));
    m.matrix2[1][0] = -(m1.matrix2[1][0]*(1/det));
    m.matrix2[1][1] = m1.matrix2[0][0]*(1/det);
    return m;
  }

  transpor(m1: Matrix2): Matrix2 {
    let m = new Matrix2();
    m.matrix2[0][0] = m1.matrix2[0][0];
    m.matrix2[0][1] = m1.matrix2[1][0];
    m.matrix2[1][0] = m1.matrix2[0][1];
    m.matrix2[1][1] = m1.matrix2[1][1];
    return m;
  }

  multiplicarEscalar(m1: Matrix2, escalar: number): Matrix2 {
    let m = new Matrix2();
    m.matrix2[0][0] = m1.matrix2[0][0] * escalar;
    m.matrix2[0][1] = m1.matrix2[1][0] * escalar;
    m.matrix2[1][0] = m1.matrix2[0][1] * escalar;
    m.matrix2[1][1] = m1.matrix2[1][1] * escalar;
    return m;
  }
}
