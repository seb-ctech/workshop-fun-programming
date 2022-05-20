import "../p5.js"

//==== PURE FUNCTIONS ============
// This are some tools that generate or modify data -- or other functions ;)


// Higher-Order Functions: TOOLS to create Tools

// Compose: Apply value to functions from the inside out like nesting function calls
export const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

// Pipe: Apply the result of one function to the input of the next, like a pipe
export const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

// Create a list out of the cumulative call of a next state function on a value
export const unfold = (f, initState) =>
  f ( (value, nextState) => [ value, ...unfold (f, nextState) ]
    , () => []
    , initState
    )

export const doIf = predicate => doit => elsedo => value => predicate(value) ? doit(value) : elsedo(value)
export const doOnEven = doIf(x => x % 2 == 0)

// Creates a list of numbers from start to end
const numbers = start => end =>
  unfold
    ( (next, done, n) =>
        n > end
          ? done ()
          : next ( n // value to add to output
                 , n + 1  // next state
                 )
    , start // initial state
    )

export const circleSpread = res => r => numbers(0)(res)
  .map((_, i) => Math.PI * 2 / res * i)
  .map(angle => createVector(Math.sin(angle) * r, Math.cos(angle) * r))

export const circleSpread30 = circleSpread(30)
export const circleSpread8 = circleSpread(8)


//==== IMPURE FUNCTIONS ============
// These are your tools which have an effect. Think of them as your pen, eraser and scissors.

export const tracepoints = drawF => points => points.forEach((point, i) => i < points.length - 1 ? drawF(point, points[i+1]) : (point, points[0]))

export const drawline = settings => a => b => {
  push()
  settings()
  line(a.x, a.y, b.x, b.y)
  pop()
}

// Can you come up with other composable and flexible drawing tools?

export const arrange = setting => n => draw => {
  numbers(0)(n).forEach(x => {
    push()
    setting(x)
    draw()
    pop()
  })
}

export const log = x => {
  console.log(x);
  return x
}