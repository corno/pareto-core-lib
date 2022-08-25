import * as pt from "pareto-core-types"
import * as pr from "pareto-core-raw"

export function createEmptyArray<T>(): pt.Array<T> {
    return pr.wrapRawArray([])
}
