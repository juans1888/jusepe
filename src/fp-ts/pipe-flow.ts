// https://www.youtube.com/watch?v=WsKEIFirdVc&list=PLUMXrUa_EuePN94nJ2hAui5nWDj8RO3lH
import { pipe, flow } from 'fp-ts/lib/function'

const addOne = (x: number) => x + 1
const double = (x: number) => x * 2
const square = (x: number) => x * x

// concatenatedFunctions :: number
// Aplica las funciones secuencialmente a partir del valor inicial 1
const concatenatedFunctions = pipe(1, addOne, double, square)

// compositionWithFlow :: (number) => number
// Devuelve una nueva función que es la composición de addOne, double, y square
const compositionWithFlow = flow(addOne, double, square)
const valueOfComposition = compositionWithFlow(1)

export { concatenatedFunctions, valueOfComposition }
