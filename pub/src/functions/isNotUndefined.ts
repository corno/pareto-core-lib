export function isNotUndefined<T>(x: undefined | T): x is T {
    return x !== undefined
}