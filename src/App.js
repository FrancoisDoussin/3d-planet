import { useEffect, useRef } from 'react';
import * as THREE from "three";
import moon from './assets/moon.jpeg';
import './App.css';

function App() {
  const planetContainer = useRef(null);

  useEffect(() => {
    const innerWidth = planetContainer.current.offsetWidth;
    const innerHeight = planetContainer.current.offsetHeight;

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera( 50, innerWidth/innerHeight, 0.1, 1000 );
    let renderer = new THREE.WebGLRenderer();

    renderer.setSize( innerWidth, innerHeight );

    planetContainer.current.appendChild( renderer.domElement );

    let geometry = new THREE.SphereGeometry( 3, 64, 32 );
    const texture = new THREE.TextureLoader().load( moon );
    let material = new THREE.MeshStandardMaterial( { map: texture } );
    let cube = new THREE.Mesh( geometry, material );

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
    <div id="planet" ref={planetContainer} />
  );
}

export default App;
