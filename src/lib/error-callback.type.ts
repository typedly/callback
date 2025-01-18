// Type.
import { CommonCallback } from "./common-callback.type";
export type ErrorCallback<
  Status = boolean,
  Value = unknown,
  Payload = unknown,
  Return = Status,
  Type extends typeof Error = typeof Error,
  Message extends string | ((value: Value, payload: Payload) => string) = string,
> = CommonCallback<
  Status,
  Value,
  Payload,
  Return
> extends (
  result: Status,
  value: Value,
  payload?: Payload,
  message?: Message,
  type?: Type
) => Return
  ? (
      status: Status,
      value: Value,
      payload?: Payload,
      message?: Message,
      type?: Type
  ) => Return
  : never;
  