import { useEffect } from 'react';
import * as THREE from "three";
import moon from './assets/moon.jpeg';
import './App.css';

function App() {
  useEffect(() => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    
    renderer.setSize( window.innerWidth, window.innerHeight );
    
    document.body.appendChild( renderer.domElement );
    
    var geometry = new THREE.SphereGeometry( 3, 64, 32 );
    const texture = new THREE.TextureLoader().load( moon );
    let material = new THREE.MeshStandardMaterial( { map: texture } );
    var cube = new THREE.Mesh( geometry, material );

    const spotLight = new THREE.SpotLight( 0xffffff );
    spotLight.position.set( 100, 100, -10 );

    scene.add( cube, spotLight );
    camera.position.z = 10;
    
    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.002;
      cube.rotation.y += 0.002;
      renderer.render( scene, camera );
    };
    
    animate();
  }, []);

  return (
    <div />
  );
}

export default App;
