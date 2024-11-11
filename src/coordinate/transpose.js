import { curry } from '../utils'
import { reflectY, translate, transpose as transposeXY } from './transform'

// eslint-disable-next-line no-unused-vars
function coordinate(transformOptions, canvasOptions) {
  return [translate(0, -0.5), reflectY(), translate(0, 0.5), transposeXY()]
}

export const transpose = curry(coordinate)
