import React, { Component } from 'react';
import './App.css';
import * as THREE from "three";
import * as OrbitControls from "three-orbitcontrols";

class BarGraph extends Component{
  componentDidMount() {
    this.sceneSetup();
    this.addBarGraphToScene();
    this.startAnimationLoop();
  }

  sceneSetup = () => {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer({antialias:true});
    this.renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
    this.mount.appendChild( this.renderer.domElement );

    this.controls = new OrbitControls( this.camera, this.renderer.domElement );
  };

  addBarGraphToScene = () => {
    var xDistance = 50;
    
    //initial offset so does not start in middle.
    var xDistance = 1.5;
    var material = new THREE.MeshPhongMaterial({color:0x00ff44});
    
    //initial offset so does not start in middle.
    var xOffset = -1;
    
    for(var i = 0; i < 3; i++){
      const length = Math.random();
      const geometry = new THREE.BoxBufferGeometry(1, length, 1);
      const mesh  = new THREE.Mesh(geometry, material);

      // Sets alignment to y-axis
      mesh.position.set(((xDistance * i) + xOffset), (length / 2), 0)

      this.scene.add(mesh);
    };

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
//    this.barGraph.rotation.x += 0.01;
//    this.barGraph.rotation.y += 0.01;

    this.renderer.render( this.scene, this.camera );
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  }; 

  render() {
    return (
      <div className="BarGraph">
          <div ref={ref => (this.mount = ref)} />
      </div>
    );
  }
}

export default BarGraph;
