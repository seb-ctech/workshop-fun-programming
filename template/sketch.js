import "../p5.js"
import {tracepoints, drawline, circleSpread30, circleSpread8, pipe, arrange, log, EasingFunctions
  /** Your functions here **/ } from "./functions.js"

const framerate = 60;

// === CREATE YOUR ABSTRACT TOOLS FIRST

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
  const T = frameCount / framerate; // time 0.0
  background(0,0,0)
  translate(width / 2, height / 2)
  // Compose Functions here for Animated Composition
  demo(EasingFunctions.easeInCubic((sin(T * 0.6) + 1) / 2))
}

window.windowResize = () => {
  resizeCanvas(window.innerWidth, window.innerHeight)
}