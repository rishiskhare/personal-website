declare module 'three/examples/jsm/controls/OrbitControls.js' {
  import { Camera, MOUSE, TOUCH } from 'three';

  export class OrbitControls {
    constructor(object: Camera, domElement?: HTMLElement);

    // Add any other methods or properties you're using from OrbitControls
    update(): boolean;
    // ... other methods ...
  }
}