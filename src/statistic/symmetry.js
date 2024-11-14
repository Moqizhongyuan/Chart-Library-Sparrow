import { group } from '../utils'

export function createSymmetryY() {
  return ({ index, values }) => {
    const { x: X } = values
    const series = X ? Array.from(group(index, i => X[i]).values()) : [index]
    const newValues = Object.fromEntries(
      ['y', 'y1']
        .filter(key => values[key])
        .map(key => [key, new Array(index.length)])
    )

    const M = new Array(series.length)

    for (const [i, I] of Object.entries(series)) {
      const m = I.flatMap(i =>
        Object.keys(newValues).map(key => values[key][i])
      )
      const max = Math.max(...m)
      const min = Math.min(...m)
      M[i] = (min + max) / 2
    }

    const maxM = Math.max(...M)

    for (let i = 0; i < series.length; i++) {
      const offset = maxM - M[i]
      for (const key of Object.keys(newValues)) {
        newValues[key][i] = values[key][i] + offset
      }
    }
    return {
      index,
      values: {
        ...values,
        ...newValues
      }
    }
  }
}
