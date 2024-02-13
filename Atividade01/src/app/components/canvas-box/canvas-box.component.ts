import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { Vector2 } from 'three';

@Component({
  selector: 'app-canvas-box',
  templateUrl: './canvas-box.component.html',
  styleUrl: './canvas-box.component.css'
})
export class CanvasBoxComponent implements OnInit {
  /**
   * Largura da área que pode ser utilizada pelos desenhos
   */
  canvasWidth = 256;
  /**
   * Altura da área que pode ser utilizada pelos desenhos
   */
  canvasHeight = 256;
  /**
   * Configuração da camera para definir a área que será apresentada na tela
   */
  camera = new THREE.OrthographicCamera(-6, 6, 6, -6, 0, 40);
  /**
   * Ponto de foco da câmera
   */
  focus = new THREE.Vector3( 6,6,0 );

  ngOnInit(): void {
    this.camera.position.x = this.focus.x;
    this.camera.position.y = this.focus.y;
    this.camera.position.z = 20;
    this.camera.lookAt(this.focus);
    this.desenharQuadrado();
    this.desenharTriangulo();
    this.desenharCirculo();
  }

  /**
   * Desenha um quadrado laranja no fundo branco
   */
  private desenharQuadrado(): void {
    const canvas = document.getElementById('canvas-quadrado');
    const cena = new THREE.Scene();
    let quadrado_material = new THREE.MeshBasicMaterial( { color: 0xF6831E, side: THREE.FrontSide } );
    let quadrado_mesh = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), quadrado_material);
    cena.add(quadrado_mesh);
    if(canvas) {
      let renderer = new THREE.WebGLRenderer({canvas: canvas, preserveDrawingBuffer: true});
      renderer.setSize(this.canvasWidth, this.canvasHeight);
      renderer.setClearColor(0xffffff, 1.0);
      renderer.render(cena, this.camera);
    }
  }

  /**
   * Desenha um triangulo azul no fundo branco
   */
  private desenharTriangulo(): void {
    const canvas = document.getElementById('canvas-triangulo');
    const cena = new THREE.Scene();
    let triangulo_material = new THREE.MeshBasicMaterial( { color: 0x8080f0, side: THREE.FrontSide } );
    let triangulo_geometry = new THREE.ShapeGeometry(new THREE.Shape([new Vector2(0, 0), new Vector2(20, 40), new Vector2(0, 40) ]));
    let triangulo_mesh = new THREE.Mesh(triangulo_geometry, triangulo_material);
    triangulo_mesh.position.set(0, 0, 0);
    triangulo_mesh.rotation.set(0, 0, 0);
    triangulo_mesh.scale.set(1, 1, 1);
    cena.add(triangulo_mesh);
    if(canvas) {
      let renderer = new THREE.WebGLRenderer({canvas: canvas, preserveDrawingBuffer: true});
      renderer.setSize(this.canvasWidth, this.canvasHeight);
      renderer.setClearColor(0xffffff, 1.0);
      renderer.render(cena, this.camera);
    }
  }

  /**
   * Desenha um círculo amarelo no fundo preto
   */
  private desenharCirculo() {
    const canvas = document.getElementById('canvas-circulo');
    const cena = new THREE.Scene();
    if(canvas) {
      let renderer = new THREE.WebGLRenderer({canvas: canvas, preserveDrawingBuffer: true});
      renderer.setSize(this.canvasWidth, this.canvasHeight);
      const geometry = new THREE.CircleGeometry(3, 64);
      const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
      const circulo_mesh = new THREE.Mesh(geometry, material);
      cena.add(circulo_mesh);
      circulo_mesh.position.set(5, 5, 0);
      renderer.render(cena, this.camera);
    }
  }
}
