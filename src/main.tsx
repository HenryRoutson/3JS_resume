import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import * as THREE from 'three';



// https://github.com/pmndrs/three-stdlib

import { GLTFLoader, FlyControls } from 'three-stdlib'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

scene.add( new THREE.DirectionalLight );

let controls = new FlyControls( camera, renderer.domElement );
controls.movementSpeed = 1;
controls.rollSpeed = Math.PI / 24;
controls.autoForward = false;
controls.dragToLook = true;


const loader = new GLTFLoader();

loader.load( 'Assets/GLTFs/macbook_on_wood_desk.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

    console.log("glf load error")
	console.error( error,  );

} );

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    controls.update(0.01)
}

animate();



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
