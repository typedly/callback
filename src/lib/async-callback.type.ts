// Type.
import { CommonCallback } from "./common-callback.type";
/**
 * @description
 * @export
 * @template [Result=any] 
 * @template [Value=unknown] 
 * @template [Payload=unknown] 
 * @template [Return=Result] 
 */
export type AsyncCallback<
  Result = any,
  Value = unknown,
  Payload = unknown,
  Return = Result
> = CommonCallback<Result, Value, Payload, Promise<Return>>;
