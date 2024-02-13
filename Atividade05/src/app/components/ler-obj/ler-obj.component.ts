import { Component } from '@angular/core';
import {
  AmbientLight, Color, DoubleSide,
  Mesh, MeshLambertMaterial,
  PerspectiveCamera,
  PointLight,
  Scene, SRGBColorSpace,
  TextureLoader, Vector3,
  WebGLRenderer
} from 'three'
import { OnInit} from '@angular/core';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { ManipulacaoVetMat } from '../../classes/manipulacao-vet-mat';

@Component({
  selector: 'ler-obj',
  templateUrl: './ler-obj.component.html',
  styleUrl: './ler-obj.component.css'
})

export class LerObjComponent implements OnInit {
  scene = new Scene();
  light = new PointLight(0xffffff, 1000);
  camera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  renderer = new WebGLRenderer({antialias: true});
  textureLoader = new TextureLoader();
  objLoader = new OBJLoader();
  controls = new  OrbitControls(this.camera, this.renderer.domElement);
  manipula = new ManipulacaoVetMat();
  mouseX = 0;
  mouseY = 0;

  /**
   * Define valores padrão de posição de iluminação e chama executa o carregamento dos objetos
   */
  ngOnInit(): void {
    this.light.position.set(2.5, 7.5, 15);
    this.scene.add(this.light);
    this.camera.position.set(0, 25, 20);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio( window.devicePixelRatio );
    document.body.appendChild(this.renderer.domElement);
    document.addEventListener( 'mousemove', (event) => {
      this.mouseX = ( event.clientX - window.innerWidth / 2 );
      this.mouseY = ( event.clientY - window.innerHeight / 2 );
    } );

    const ambientLight = new AmbientLight( 0xffffff, 0.4);
    this.scene.add(ambientLight);

    this.controls.minDistance = 10;
    this.controls.maxDistance = 15;
    this.controls.addEventListener('change', this.render.bind(this));
    this.loadObj('./assets/models/Cat.obj', './assets/models/Cat_diffuse.jpg', this.manipula.criarVector3(30, 0, 0), -190);
    this.loadObj('./assets/models/Heart.obj', './assets/models/hardwood2_diffuse.jpg', this.manipula.criarVector3(0, 0, 0), 180);
    this.loadObj('./assets/models/star.obj', './assets/models/grasslight-big.jpg', this.manipula.criarVector3(-30, 0, 0), 80);
    this.render();
  }

  /**
   * Carrega o arquivo .obj e um arquivo de textura
   */
  loadObj(objUrl: string, textureUrl: string, position: Vector3, rotate: number): void {
    const texture = this.textureLoader.load(textureUrl)
    const material = new MeshLambertMaterial({ map: texture, emissive: 0x200000, side: DoubleSide,
      alphaTest: 0.1 });
    this.objLoader
      .load(objUrl,
      (object): void => {
        object.traverse( (child) => {
          if((child as Mesh).isMesh) {
            (child as Mesh).material = material;
          }
        });
        object.rotateX(rotate);
        object.position.set(position.x, position.y, position.z);
        this.scene.add(object);
      }, (xhr): void => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error): void => {
        console.log(error);
      }
    )
  }

  /**
   * Renderiza a cena com os objetos e câmeras
   */
  render(): void {
    window.requestAnimationFrame((a) => {
      return a;
    });
    const camera1 = new PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 100);
    camera1.position.x += this.mouseX * 0.05;
    camera1.position.fromArray([0, 20, 50]);
    camera1.up.fromArray([0, 1, 0]);
    camera1.lookAt(this.scene.position);
    camera1.position.x = Math.max( Math.min( camera1.position.x, 200 ), -200 );

    const left1 = 0;
    const bottom1 = 0;
    const width1 = Math.floor(window.innerWidth * 0.5);
    const height1 = Math.floor(window.innerHeight);
    this.renderer.setViewport(left1, bottom1, width1, height1);
    this.renderer.setScissor(left1, bottom1, width1, height1);
    this.renderer.setScissorTest(true);
    this.renderer.setClearColor(new Color().setRGB(0.5, 0.5, 0.7, SRGBColorSpace));
    camera1.aspect = width1 / height1;
    camera1.updateProjectionMatrix();
    this.renderer.render(this.scene, camera1);

    const camera2 = new PerspectiveCamera(125, window.innerWidth / window.innerHeight, 1, 100);
    camera2.position.fromArray([0, 50, 0]);
    camera2.up.fromArray([0, 0, 1]);
    camera2.lookAt(camera2.position.clone().setY(0));
    camera2.position.x = Math.max( Math.min( camera2.position.x, 2000 ), - 2000 );
    camera2.lookAt( this.scene.position );
    const left2 = Math.floor(window.innerWidth * 0.5);
    const bottom2 = 0;
    const width2 = Math.floor(window.innerWidth * 0.5);
    const height2 = Math.floor(window.innerHeight);
    this.renderer.setViewport(left2, bottom2, width2, height2);
    this.renderer.setScissor(left2, bottom2, width2, height2);
    this.renderer.setScissorTest(true);
    this.renderer.setClearColor(new Color().setRGB(0.7, 0.5, 0.5, SRGBColorSpace));
    camera2.aspect = width2 / height2;
    camera2.updateProjectionMatrix();
    this.renderer.render(this.scene, camera2);

    window.requestAnimationFrame((a) => {
      return a;
    });
  }
}
