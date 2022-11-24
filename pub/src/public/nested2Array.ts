import * as pt from "pareto-core-types"
import * as pi from "pareto-core-internals"

export function nested2Array<T>($: pt.Nested<T>): pt.Array<T> {
    return pi.wrapRawArray(pi.flatten($))
}