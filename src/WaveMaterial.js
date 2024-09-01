import * as THREE from 'three'
import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

// Define the WaveMaterial with combined Perlin and Fractal noise animations
const WaveMaterial = shaderMaterial(
  {
    time: 0,
    resolution: new THREE.Vector2(),
    pointer: new THREE.Vector2()
  },
  /* Vertex Shader */
  /*glsl*/ `
    varying vec2 vUv;
    void main() {
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectionPosition = projectionMatrix * viewPosition;
      gl_Position = projectionPosition;
      vUv = uv;
    }`,
  /* Fragment Shader */
  /*glsl*/ `
    uniform float time;
    uniform vec2 resolution;
    uniform vec2 pointer;
    varying vec2 vUv;

    vec3 palette(float t) {
      vec3 a = vec3(0.6, 0.3, 0.9); // Base color: Purple
      vec3 b = vec3(0.5, 0.5, 0.5); // Contrast and brightness
      vec3 c = vec3(1.0, 0.6, 0.8); // Pink hue
      vec3 d = vec3(0.2, 0.6, 0.9); // Blue hue
      return a + b * cos(6.28318 * (c * t + d));
    }

    // Simple hash function for random values
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }

    // Fractal noise function
    float fractalNoise(vec2 p) {
      float total = 0.0;
      float amplitude = 0.5;
      for (int i = 0; i < 5; i++) {
        total += amplitude * hash(p);
        p *= 2.0;
        amplitude *= 0.5;
      }
      return total;
    }

    // Perlin noise function
    float rand(vec2 co){
      return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
    }

    float noise(vec2 p){
      vec2 i = floor(p);
      vec2 f = fract(p);
      
      // Four corners in 2D of a tile
      float a = rand(i);
      float b = rand(i + vec2(1.0, 0.0));
      float c = rand(i + vec2(0.0, 1.0));
      float d = rand(i + vec2(1.0, 1.0));

      vec2 u = f * f * (3.0 - 2.0 * f);

      return mix(a, b, u.x) +
             (c - a) * u.y * (1.0 - u.x) +
             (d - b) * u.x * u.y;
    }

    // Combined Perlin and Fractal noise
    float combinedNoise(vec2 p) {
      float perlin = noise(p * 5.0);
      float fractal = fractalNoise(p * 5.0);
      return perlin * fractal; // Combine both noises
    }

    void main() {
      vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / resolution.y;
      vec2 uv0 = uv;
      vec3 finalColor = vec3(0.0);

      // Use combined noise function
      float noiseValue = combinedNoise(uv + time * 0.1);
      
      // Modulate with some base UV behavior
      uv = sin(uv * 0.5) - pointer;
      float d = length(uv) * exp(-length(uv0));
      vec3 col = palette(length(uv0) + noiseValue * 0.2);
      d = sin(d * 8.0 + noiseValue) / 8.0;
      d = abs(d);
      d = pow(0.02 / d, 2.0);
      finalColor += col * d;
      gl_FragColor = vec4(finalColor, 1.0);
    }`
)

extend({ WaveMaterial })

export { WaveMaterial }
