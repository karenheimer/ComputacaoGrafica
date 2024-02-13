import {Component, Input} from '@angular/core';
import {
  AmbientLight,
  Mesh, MeshBasicMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  TextureLoader,
  WebGLRenderer
} from 'three'
import { OnInit} from '@angular/core';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

@Component({
  selector: 'ler-obj',
  templateUrl: './ler-obj.component.html',
  styleUrl: './ler-obj.component.css'
})

export class LerObjComponent implements OnInit {
  @Input() objUrl = "";
  @Input() textureUrl = "";
  scene = new Scene();
  light = new PointLight(0xffffff, 1000);
  camera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  renderer = new WebGLRenderer();
  textureLoader = new TextureLoader();
  objLoader = new OBJLoader();
  controls = new  OrbitControls(this.camera, this.renderer.domElement);

  /**
   * Define valores padrão de posição de câmera, iluminação e controles da cena.
   */
  ngOnInit(): void {
    this.light.position.set(2.5, 7.5, 15);
    this.scene.add(this.light);
    this.camera.position.set(0, 25, 20);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.clearColor();
    document.body.appendChild(this.renderer.domElement);

    const ambientLight = new AmbientLight( 0xffffff, 0.4);
    this.scene.add(ambientLight);

    this.controls.minDistance = 10;
    this.controls.maxDistance = 15;
    this.controls.addEventListener('change', this.render.bind(this));
    this.loadObj();
    this.render();
  }

  /**
   * Carrega o arquivo .obj e um arquivo de textura
   */
  loadObj(): void {
    this.objLoader.load(this.objUrl,
      (object): void => {
        const material = new MeshBasicMaterial({map: this.textureLoader.load(this.textureUrl)});
        (object.children[0] as Mesh).material = material;
        object.traverse(function (child) {
          if ((child as Mesh).isMesh) {
            (child as Mesh).material = material
          }
        });
        object.rotateX(-190);
        object.scale.set(0.08, 0.08, 0.08);
        object.position.set(0, 0, 0);
        this.scene.add(object);
        this.controls.update();
      }, (xhr): void => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error): void => {
        console.log(error);
      }
    )
  }

  /**
   * Renderiza a cena com o objeto e a câmera
   */
  render(): void {
    this.renderer.render(this.scene, this.camera);
  }
}
