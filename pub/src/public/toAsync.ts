import * as pt from "pareto-core-types"
import * as pi from "pareto-core-internals"


export function toAsyncValue<T>(
    $c: ($i: ($: T) => void) => void
): pt.AsyncValue<T> {
    return pi.wrapAsyncValueImp(
        true,
        (cb) => {
            let hasBeenCalled = false
            $c(($) => {
                if (hasBeenCalled) {
                    throw new Error("callback has already been called")
                }
                hasBeenCalled = true
                cb($)
            })
        }
    )
}