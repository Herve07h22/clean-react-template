
export const Nothing = null
export type Maybe<T> = T | typeof Nothing ;

export function isJust<T>(maybe: Maybe<T>):maybe is T {
    return maybe !== Nothing
}

export function whenNothing<T>(defaultValue :T, maybe: Maybe<T>):T {
    return isJust(maybe) ? maybe : defaultValue
}

