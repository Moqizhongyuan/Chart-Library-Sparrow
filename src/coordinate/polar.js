import { translate, scale, reflectY, polar as polarT } from './transform'
import { curry } from '../utils/helper'

function coordinate(transformOptions, canvasOptions) {
  const { width, height } = canvasOptions
  const { innerRadius, outerRadius, startAngle, endAngle } = transformOptions

  const aspect = width / height
  const sx = aspect > 1 ? 1 / aspect : 1
  const sy = aspect > 1 ? 1 : aspect

  return [
    // 翻转y轴
    translate(0, -0.5),
    reflectY(),
    translate(0, 0.5),

    // 映射点坐标到极点坐标系
    scale(endAngle - startAngle, outerRadius - innerRadius),
    translate(startAngle, innerRadius),
    polarT(),

    // 使得极点坐标系内切画布
    scale(sx, sy),
    scale(0.5, 0.5),

    // 平移至画布中央
    translate(0.5, 0.5)
  ]
}

export const polar = curry(coordinate)
