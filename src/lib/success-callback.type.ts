export type SuccessCallback<
  Value = unknown,
  Payload = unknown,
  Return = true
> = (value: Value, payload?: Payload) => Return;
