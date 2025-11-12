export interface OnSetCallback<T, Payload> {
  (value: T, oldValue?: T, payload?: Payload): T;
}

