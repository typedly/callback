/**
 * @description The callback function performed on change.
 * @export
 * @template T The type of value.
 * @template Payload The type of the optional payload.
 */
export type OnChangeCallback<T, Payload> =
  (value: T, previousValue: T, payload?: Payload) => void;