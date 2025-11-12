/**
 * @description A callback type for setting a property on an object, returning the new value.
 * @export
 * @template O The type of the object, constrained to object types.
 * @template Payload The type of the optional payload.
 */
export type OnSetPropertyCallback<O extends object, Payload> =
  <K extends keyof O>(key: K, value: O[K], previousValue: O[K], payload?: Payload) => O[K];