/**
 * @description Represents a callback function with parameters, the `value` being processed, the `result` of this processing, an optional
 * `payload`, and the ability to return a custom value of generic type variable `Return`.
 * @param result The processed result of generic type variable `Result` type of the given `value`.
 * @param value The value of the generic type variable `Value` to be processed and which the given `result` applies.
 * @param payload An optional parameter of a generic type variable `Payload` to provide data - additional context or metadata.
 * @export
 * @template [Result] Specifies the type of the `result` parameter, indicating the outcome of the processing.
 * @template [Value] Determines `value` parameter type.
 * @template [Payload] Indicates `payload` parameter type.
 * @template [Return] Specifies the type of the return value of the callback.
 * @returns The returned value is generic type variable `Return` indicating the processing result of the given `value`.
 */
export type CommonCallback<
  Result,
  Value,
  Payload,
  Return
> = (
  result: Result,
  value: Value,
  payload?: Payload
) => Return;
