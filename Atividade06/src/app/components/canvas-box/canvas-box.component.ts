import { Component, OnInit } from '@angular/core';
import { Ray, Vector3 } from 'three';
import { ManipulacaoVetMat } from '../../classes/manipulacao-vet-mat';
import { Imagem } from '../../classes/imagem';
import { HittableList } from '../../classes/hittable-list';
import { Esfera } from '../../classes/esfera';
import { Metal } from '../../classes/Material/metal';
import { Vidro } from '../../classes/Material/vidro';
import { HitRecord } from '../../classes/hit-record';
import { SalvarComponent } from '../salvar/salvar.component';

@Component({
  selector: 'app-canvas-box',
  templateUrl: './canvas-box.component.html',
  styleUrl: './canvas-box.component.css'
})
export class CanvasBoxComponent implements OnInit {
  private manipula  = new ManipulacaoVetMat();

  resolucaoX = 400;
  resolucaoY = 200;
  samplesPerPixel = 50;
  imagem = new Imagem(this.resolucaoX, this.resolucaoY);
  salvar = new SalvarComponent();

  listHittable = new Array<Esfera>();
  world: HittableList = new HittableList(this.listHittable);
  cameraHorizontal = this.manipula.criarVector3(4, 0, 0);
  cameraVertical = this.manipula.criarVector3(0, 2, 0);
  cameraCornerLowerleft = this.manipula.criarVector3(-2, -1, -1);
  cameraCenter = this.manipula.criarVector3(0, 0, 0);

  ngOnInit(): void {
    if(this.listHittable != undefined) {
      this.listHittable.push(new Esfera(this.manipula.criarVector3(1, 0, -1), 0.5, new Metal(this.manipula.criarVector3(0.8, 0.6, 0.2), 0)))
      this.listHittable.push(new Esfera(this.manipula.criarVector3(-1, 0, -1), 0.5, new Vidro(1.5)));
      this.world = new HittableList(this.listHittable);
      for (let j = this.resolucaoY - 1; j >= 0; j--) {
        for (let i = 0; i < this.resolucaoX; i++) {
          let color = this.manipula.criarVector3(0, 0, 0);
          for (let sample = 0; sample < this.samplesPerPixel; sample++) {
            let u = (i + Math.random()) / this.resolucaoX;
            let v = (j + Math.random()) / this.resolucaoY;
            let vectorHPos = this.manipula.multiplicarEscalarVec3(this.cameraHorizontal, u);
            let vectorVPos = this.manipula.multiplicarEscalarVec3(this.cameraVertical, v);
            let ray = new Ray(this.cameraCenter, this.manipula.subtrairVetoresVec3(this.manipula.somarVetoresVec3(this.cameraCornerLowerleft, this.manipula.somarVetoresVec3(vectorHPos, vectorVPos)), this.cameraCenter));
            let generatedColor = this.rayColor(ray, this.world, 0);
            color = this.manipula.somarVetoresVec3(color, generatedColor);
          }
          color = this.manipula.multiplicarEscalarVec3(color, 1/this.samplesPerPixel);
          color = this.manipula.criarVector3(Math.sqrt(color.x), Math.sqrt(color.y), Math.sqrt(color.z));
          this.imagem.adicionarPixel(color);
        }
      }
    }
    this.salvar.gerarImagem(this.imagem);
  }

  rayColor(ray: Ray, world: HittableList, maxDepth: number): Vector3 {
    let hitRecord = new HitRecord();
    let tMax = Math.pow(10, 38);
    if (world.hit(ray, 0.001, tMax, hitRecord)) {
      let rayScattered = new Ray(this.manipula.criarVector3(0, 0, 0), this.manipula.criarVector3(0, 0, 0));
      let vectorAttenuation = this.manipula.criarVector3(0, 0, 0);
      if (maxDepth < 50 && hitRecord.material.scatter(ray, hitRecord, vectorAttenuation, rayScattered)) {
        let color = this.rayColor(rayScattered, world, maxDepth + 1);
        return this.manipula.criarVector3(vectorAttenuation.x * color.x, vectorAttenuation.y * color.y, vectorAttenuation.z * color.z);
      } else {
        return this.manipula.criarVector3(0, 0, 0);
      }
    } else {
      let unitDirection = (this.manipula.multiplicarEscalarVec3(ray.direction, 1/ray.direction.length()).y + 1) * 0.5;
      let colorStart = this.manipula.criarVector3(1, 1, 1);
      let colorEnd = this.manipula.criarVector3(0.5, 0.7, 1.0);
      return this.manipula.somarVetoresVec3(this.manipula.multiplicarEscalarVec3(colorStart, 1 - unitDirection), (this.manipula.multiplicarEscalarVec3(colorEnd, unitDirection))); // (1 - posY) * colorStart + posY * colorEnd
    }
  }
}

