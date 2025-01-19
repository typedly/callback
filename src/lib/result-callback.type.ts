// Type.
import { CommonCallback } from "./common-callback.type";
export type ResultCallback<
  Value = unknown,
  Payload = unknown,
> = CommonCallback<any, Value, Payload, Value>;
