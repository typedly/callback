// Type.
import { CommonCallback } from "./common-callback.type";
/**
 * @description Asynchronous callback type definition.
 * @export
 * @template [Result=any] Specifies the type of the result parameter, indicating the outcome.
 * @template [Value=unknown] Specifies the type of the value parameter.
 * @template [Payload=unknown] Specifies the type of the payload parameter, containing additional data for the callback.
 * @template [Return=Result] Specifies the type of the return value of the callback.
 */
export type AsyncCallback<
  Result = any,
  Value = unknown,
  Payload = unknown,
  Return = Result
> = CommonCallback<Result, Value, Payload, Promise<Return>>;
