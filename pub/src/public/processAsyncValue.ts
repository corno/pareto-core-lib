import * as pt from 'pareto-core-types'

export function processAsyncValue<T>($: pt.AsyncValue<T>, $i: ($: T) => void): void {
   $.__execute($i)
}
