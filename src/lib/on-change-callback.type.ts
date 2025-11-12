export type OnChangeCallback<T, Payload> =
  (value: T, oldValue: T, payload?: Payload) => void;