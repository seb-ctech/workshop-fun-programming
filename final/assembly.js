import "../p5.js"
//import {/** Your functions here **/} from "../<name>/functions.js"

let time = 0.0;

window.setup = () => {
  createCanvas(window.innerWidth, window.innerHeight)
  background(0,0,0)
}

window.draw = () => {
  progressTime()
}

window.windowResize = () => {
  resizeCanvas(window.innerWidth, window.innerHeight)
}

function progressTime(){
  time += deltaTime
  time = parseFloat(time.toFixed(2))
  console.log("Time: ", time)
}