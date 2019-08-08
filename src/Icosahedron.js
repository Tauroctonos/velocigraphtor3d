import React, { Component } from 'react';
import './App.css';
import * as THREE from "three";

class Icosahedron extends Component{
  componentDidMount() {
    this.sceneSetup();
    this.addIcosahedronToScene();
    this.startAnimationLoop();
  }

  sceneSetup = () => {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    
    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
    this.mount.appendChild( this.renderer.domElement );
  };

  addIcosahedronToScene = () => {
    const geometry = new THREE.IcosahedronGeometry();
    const material = new THREE.MeshPhongMaterial( {
        color: 0x00ff00,
        emissive: 0x072534,
        side: THREE.DoubleSide,
        flatShading: true
    } );
    this.icosahedron = new THREE.Mesh( geometry, material );
    this.scene.add( this.icosahedron );

    const lights = [];
    lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

    lights[ 0 ].position.set( 0, 200, 0 );
    lights[ 1 ].position.set( 100, 200, 100 );
    lights[ 2 ].position.set( - 100, - 200, - 100 );

    this.scene.add( lights[ 0 ] );
    this.scene.add( lights[ 1 ] );
    this.scene.add( lights[ 2 ] );
  };

  startAnimationLoop = () => {
    this.icosahedron.rotation.x += 0.01;
    this.icosahedron.rotation.y += 0.01;

    this.renderer.render( this.scene, this.camera );
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };

  render() {
    return (
      <div className="Icosahedron">
        <header className="Velocigraphtor 3D">
          <div ref={ref => (this.mount = ref)} />
        </header>
      </div>
    );
  }
}

export default Icosahedron;
