import pt from "pareto-core-types"

export function flatten<T>($: pt.Nested<T>): T[] {
    const flattened: T[] = []
    function inner(nestedValue: pt.Nested<T>) {
        if (nestedValue instanceof Array) {
            nestedValue.forEach(($) => {
                inner($)
            })
        } else {
            flattened.push(nestedValue)
        }
    }
    inner($)
    return flattened
}
