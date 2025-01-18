// Type.
import { CommonCallback } from "./common-callback.type";
export type AsyncCallback<
  Result = any,
  Value = unknown,
  Payload = unknown,
  Return = Result
> = CommonCallback<Result, Value, Payload, Promise<Return>>;
