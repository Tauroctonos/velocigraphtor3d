import React, { Component } from 'react';
import './App.css';
import * as THREE from "three";

class Icosahedron extends Component{
  componentDidMount() {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
    this.mount.appendChild( renderer.domElement );
    var geometry = new THREE.IcosahedronGeometry ();
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var icosahedron = new THREE.Mesh( geometry, material );
    scene.add( icosahedron );
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame( animate );
      icosahedron.rotation.x += 0.01;
      icosahedron.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();
    // === THREE.JS EXAMPLE CODE END ===
  }

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
