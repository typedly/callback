export type FailureCallback<
  Value = unknown,
  Payload = unknown,
  Return = false
> = (value: Value, payload?: Payload) => Return;
