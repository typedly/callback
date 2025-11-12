/**
 * @description The callback function performed on property set.
 * @export
 * @template T The type of value.
 * @template Payload The type of the optional payload.
 */
export type OnSetCallback<T, Payload> =
  (value: T, previousValue?: T, payload?: Payload) => T;