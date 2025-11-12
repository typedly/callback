/**
 * @description A callback type for property changes on an object.
 * @export
 * @template {object} O The type of the object, constrained to object types.
 * @template Payload The type of the optional payload.
 */
export type OnPropertyChangeCallback<O extends object, Payload> = 
  <K extends keyof O>(key: K, value: O[K], previousValue: O[K], payload?: Payload) => void;