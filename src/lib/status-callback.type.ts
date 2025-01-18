// Type.
import { CommonCallback } from "./common-callback.type";
export type StatusCallback<
  Status,
  Value = unknown,
  Payload = unknown,
  Return = Status
> = CommonCallback<
  Status,
  Value,
  Payload,
  Return
> extends (
  result: Status,
  value: Value,
  payload?: Payload
) => Return
  ? (
      status: Status,
      value: Value,
      payload?: Payload
  ) => Return
  : never;
