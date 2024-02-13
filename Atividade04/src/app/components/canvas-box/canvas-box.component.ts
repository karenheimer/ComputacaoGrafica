import { Component, OnInit } from '@angular/core';
import { Ray, Vector3 } from 'three';
import { ManipulacaoVetMat } from '../../classes/manipulacao-vet-mat';
import { Imagem } from '../../classes/imagem';
import { SalvarComponent } from '../salvar/salvar.component';

@Component({
  selector: 'app-canvas-box',
  templateUrl: './canvas-box.component.html',
  styleUrl: './canvas-box.component.css'
})
export class CanvasBoxComponent implements OnInit {
  manipula = new ManipulacaoVetMat();
  salvar = new SalvarComponent();

  image_width = 1000;
  image_height = 500;

  imagem: Imagem = new Imagem(this.image_width, this.image_height);

  ngOnInit(): void {
    this.desenharGradienteComEsfera();
  }
  private desenharGradienteComEsfera() {
    let vectorCantoEsquerdoInferior = this.manipula.criarVector3(-2, -1, -1);
    let vectorHorizontal = this.manipula.criarVector3(4, 0, 0);
    let vectorVertical = this.manipula.criarVector3(0, 2, 0);
    let vectorOrigem = this.manipula.criarVector3(0, 0, 0);

    for (let j = this.image_height - 1; j >= 0; j--) {
      for (let i = 0; i < this.image_width; i++) {
        let u = i / this.image_width;
        let v = j / this.image_height;
        let vectorHPos = this.manipula.multiplicarEscalarVec3(vectorHorizontal, u);
        let vectorVPos = this.manipula.multiplicarEscalarVec3(vectorVertical, v);
        let ray = new Ray(vectorOrigem, this.manipula.somarVetoresVec3(vectorCantoEsquerdoInferior, this.manipula.somarVetoresVec3(vectorHPos, vectorVPos)));
        let color = this.gerarCor(ray);
        this.imagem.adicionarPixel(this.manipula.criarVector3(color.x, color.y, color.z));
      }
    }
    this.salvar.salvarImagem(this.imagem);
  }

  private gerarCor(ray: Ray): Vector3 {
    let centroEsfera = this.manipula.criarVector3(0, 0, -1);
    if (this.raioAtingeEsfera(centroEsfera, 0.5, ray)) {
        return this.manipula.criarVector3(1, 0, 0);
    }
    let vectorDirectionUnit = this.manipula.multiplicarEscalarVec3(ray.direction, 1/ray.direction.length());
    let posY = 0.5 * (vectorDirectionUnit.y + 1);
    let colorStart = this.manipula.criarVector3(1, 1, 1);
    let colorEnd = this.manipula.criarVector3(0.5, 0.7, 1.0);
    return this.manipula.somarVetoresVec3(this.manipula.multiplicarEscalarVec3(colorStart, 1 - posY), this.manipula.multiplicarEscalarVec3(colorEnd, posY));
  }

  raioAtingeEsfera(vectorCentro: Vector3, raioEsfera: number, ray: Ray) {
    let vectorOrigemCentro = this.manipula.subtrairVetoresVec3(ray.origin, vectorCentro);
    let a = ray.direction.dot(ray.direction);
    let b = vectorOrigemCentro.dot(ray.direction) * 2;
    let c = vectorOrigemCentro.dot(vectorOrigemCentro) - (raioEsfera * raioEsfera);
    let discriminante = (b * b) - (4 * a * c);
    return (discriminante > 0);
  }
}
