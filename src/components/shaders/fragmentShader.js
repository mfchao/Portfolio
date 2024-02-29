const fragmentShader = `
uniform float u_time;
uniform float progreess;
uniform sampler2D texture1;
uniform vec4 u_resolution;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vColor;
float PI = 3.141592653589793;
uniform vec3 u_colorA;
uniform vec3 u_colorB;
varying float vZ;

void main() {
  
  // vec3 color = mix(u_colorA, u_colorB, vZ * 2.0 + 0.5); 
  gl_FragColor = vec4(vColor, 1.0 );
  
}

`;

export default fragmentShader;
