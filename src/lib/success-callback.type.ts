export type SuccessCallback<
  Value = unknown,
  Payload = unknown,
  Return = void
> = (value: Value, payload?: Payload) => Return;
