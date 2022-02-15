import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Container } from './style';
import Header from '../Header/Header';

import planetTexture from '../../assets/moon.jpeg';

const Planet = () => {
  const planetContainer = useRef(null);

  const Scene = () => new THREE.Scene();

  const Camera = () => {
    const camera = new THREE.PerspectiveCamera(
      50,
      planetContainer.current.offsetWidth/planetContainer.current.offsetHeight,
      0.1,
      1000
    );
    camera.position.z = 10;
    return camera;
  };

  const Renderer = () => {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(
      planetContainer.current.offsetWidth,
      planetContainer.current.offsetHeight
    );
    return renderer;
  };

  const Planet = () => {
    const geometry = new THREE.SphereGeometry( 3.5, 64, 32 );
    const texture = new THREE.TextureLoader().load( planetTexture );
    const material = new THREE.MeshStandardMaterial( { map: texture } );
    return new THREE.Mesh( geometry, material );
  };

  const Spotlight = () => {
    const spotLight = new THREE.SpotLight( 0xffffff );
    spotLight.position.set( 100, 100, 10 );
    return spotLight;
  };
  
  useEffect(() => {
    const scene = Scene();
    const camera = Camera();
    const renderer = Renderer();
    const planet = Planet();

    planetContainer.current.appendChild( renderer.domElement );
    scene.add( planet, Spotlight() );

    var animate = function () {
      requestAnimationFrame( animate );
      planet.rotation.y += 0.002;
      renderer.render( scene, camera );
    };

    animate();
  }, []);

  const scrollDown = () => {
    window.scroll({
      top: planetContainer.current.offsetHeight,
      behavior: 'smooth' 
    });
  }

  return (
    <Container id="planet" ref={planetContainer}>
      <Header scrollDown={scrollDown} />
    </Container>
  );
}

export default Planet;
