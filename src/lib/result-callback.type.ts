// Type.
import { CommonCallback } from "./common-callback.type";
/**
 * @description Represents the type of function that takes the result of the processed value and return it.
 * @export
 * @template [Result=any] The type of the result. Defaults to, `any`.
 * @template [Value=unknown] The type of the processed value. Defaults to, `unknown`.
 * @template [Payload=unknown] The type of additional data that may be provided. Defaults to `unknown`.
 */
export type ResultCallback<
  Result = any,
  Value = unknown,
  Payload = unknown,
> = CommonCallback<Result, Value, Payload, Result>;
