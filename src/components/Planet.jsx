import { useEffect, useRef } from 'react';
import * as THREE from "three";
import styled from 'styled-components';

import moon from '../assets/moon.jpeg';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
`;

const Header = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  color: rgb(184, 184, 184);
  font-size: 3em;
`;

const Subtitle = styled.h2`
  color: rgb(223, 204, 146);
`;

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
    const texture = new THREE.TextureLoader().load( moon );
    const material = new THREE.MeshStandardMaterial( { map: texture } );
    return new THREE.Mesh( geometry, material );
  };

  const Spotlight = () => {
    const spotLight = new THREE.SpotLight( 0xffffff );
    spotLight.position.set( 100, 100, -10 );
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
      planet.rotation.x += 0.001;
      planet.rotation.y += 0.002;
      renderer.render( scene, camera );
    };

    animate();
  }, []);

  return (
    <Container id="planet" ref={planetContainer}>
      <Header>
        <Title>François Doussin</Title>
        <Subtitle>Développer - Photographer</Subtitle>
      </Header>
    </Container>
  );
}

export default Planet;
