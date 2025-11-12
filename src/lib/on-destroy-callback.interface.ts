export interface OnDestroyCallback<Payload> {
  (payload?: Payload): void;
}