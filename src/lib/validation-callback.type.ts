// Type.
import { CommonCallback } from "./common-callback.type";
export type ValidationCallback<
  Value = unknown,
  Payload = unknown,
  Return = boolean
> = CommonCallback<boolean, Value, Payload, Return>;
