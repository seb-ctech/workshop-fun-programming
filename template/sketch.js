import "../p5.js"
import {tracepoints, drawline, circleSpread30, circleSpread8, pipe,/** Your functions here **/
arrange} from "./functions.js"

let time = 0.0;

// TODO: come up with a framework sketch, that implements an idea that can be expanded on
// TODO: create a functional modular architecture to change pieces of the algorithm and its behavior
// TODO: Some components are just concerned with value production, booleans for branching, numbers as parameters.
// but some are also concerned with high-order operation like consuming and producing functions. Determine
// key moments in an algorithm that can be extended with whole other algorithms. 
// TODO: This architecture should be extendable to the top and to the bottom
// TODO: Contain one complete state data-structure for a uniform handling of parameters
// TODO: Allow one impure function that mutates the overall state from one frame to the next
// TODO: Create high abstractions for general-purpose manipulation of data-structures

// === CREATE YOUR ABSTRACT TOOLS FIRST




// === THEN PLAY WITH THEM BY COMPOSITION

window.setup = () => {
  createCanvas(window.innerWidth, window.innerHeight)
  background(0,0,0)
  // Your Setup code here 
  // (Call all your functions here if you are not doing an animation)
  translate(500, 500);
  arrange(x => {
   rotate(Math.PI / 8 * x)
   translate(x * 50, 50)
  })
  (10)
  (() => tracepoints((a, b) => drawline(() => {
    stroke(255, b.y * 5, a.x * 5)
    strokeWeight(a.y / 10)
  })(a)(b))(pipe(x => x.slice(0, 25), x => x.sort( (a, b) => a.x - b.y))(circleSpread30(100))))
}


window.draw = () => {
  const T = frameCount / frameRate(); // time 0.0
  // Your draw code here
}

window.windowResize = () => {
  resizeCanvas(window.innerWidth, window.innerHeight)
}