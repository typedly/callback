// Type.
import { CommonCallback } from "./common-callback.type";
/**
 * @description Represents the type of function that takes the validation result of the `Value` of `boolean` type.
 * @export
 * @template [Value=unknown] The type of the value being validated. Defaults to `unknown`.
 * @template [Payload=unknown] The type of additional data that may be used in post-validation. Defaults to `unknown`.
 */
export type ValidationCallback<
  Value = unknown,
  Payload = unknown,
> = CommonCallback<boolean, Value, Payload, boolean>;
