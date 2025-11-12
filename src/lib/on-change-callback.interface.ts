export interface OnChangeCallback<T, Payload> {
  (value: T, oldValue: T, payload?: Payload): void;
}