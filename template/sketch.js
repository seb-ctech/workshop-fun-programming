import "../p5.js"
import {tracepoints, drawline, circleSpread30, circleSpread8, pipe, arrange, log, EasingFunctions
  /** Your functions here **/ } from "./functions.js"

const framerate = 60;

// === CREATE YOUR ABSTRACT TOOLS FIRST

// Here as a demo of what can be achieved in 
// ~1 Hour of experimenting with functional programming
// Notice how this is all just one big function, with many component functions
// This can be expanded by adding functions inside of other functions, chaining together more functions, replace existing functions. And feels like a big modular interface with many knobs and sliders. 

// 1. The Arrange Function applies a transformation X times before executing the draw function
// 2. The Tracepoints applies a draw function on a set of of points
// 3. The points list is modified by an extensible list of functions inside of pipe
// 4. circle Spread creates points arranged in a circle formation

const demo = t => arrange(x => {
  rotate(Math.PI / 8 * x * log(t))
  translate(x * 50, 50)
 })
 (10)
 (() => tracepoints((a, b) => drawline(() => {
   stroke(255 - t * 200, b.y * 5, a.x * 5)
   strokeWeight(a.y / 10)
 })(a)(b))
  (pipe(
   x => x.slice(0, 100 * t), 
   x => x.sort( (a, b) => a.x - b.y))
  (circleSpread30(100))))


// === THEN PLAY WITH THEM BY COMPOSITION

window.setup = () => {
  createCanvas(window.innerWidth, window.innerHeight)
  frameRate(framerate)
  background(0,0,0)
  translate(width / 2, height / 2)
  // Compose Functions here for Static Composition
  demo(0.4)
}


window.draw = () => {
  const T = frameCount / framerate; // time 0.0 -> ...
  background(0,0,0)
  translate(width / 2, height / 2)
  // Compose Functions here for Animated Composition
  demo(EasingFunctions.easeInCubic((sin(T * 0.6) + 1) / 2))
}

window.windowResize = () => {
  resizeCanvas(window.innerWidth, window.innerHeight)
}