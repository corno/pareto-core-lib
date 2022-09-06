export function isNotNull<T>(x: null | T): x is T {
    return x !== null
}