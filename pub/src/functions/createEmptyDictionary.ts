import * as pt from "pareto-core-types"
import * as pr from "pareto-core-raw"


export function createEmptyDictionary<T>(): pt.Dictionary<T> {
    return pr.wrapRawDictionary({})
}
