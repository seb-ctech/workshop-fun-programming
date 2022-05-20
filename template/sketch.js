import "../p5.js"
import {/** Your functions here **/} from "./functions.js"

let time = 0.0;


// === CREATE YOUR ABSTRACT TOOLS FIRST




// === THEN PLAY WITH THEM BY COMPOSITION

window.setup = () => {
  createCanvas(window.innerWidth, window.innerHeight)
  // Your Setup code here 
  // (Call all your functions here if you are not doing an animation)
  background(0,0,0)
}


window.draw = () => {
  progressTime()
  // Your draw code here
  // (only use if you want to do an Animation)
  // Use 'frameCount' or the provided "time" variable as base inputs: NO GLOBAL VARIABLES ALLOWED
}

window.windowResize = () => {
  resizeCanvas(window.innerWidth, window.innerHeight)
}


// ====== IMPURE EVIL FUNCTIONS

function progressTime(){
  time += deltaTime
  time = parseFloat(time.toFixed(2))
  console.log("Time: ", time)
}