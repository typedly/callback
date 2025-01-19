/**
 * @description Represents a callback function invoked after a failed action.
 * @export
 * @template [Value=unknown] The type of the value associated with the failed action. Defaults to `unknown`.
 * @template [Payload=unknown] The type of additional data that may be provided. Defaults to `unknown`.
 */
export type FailureCallback<
  Value = unknown,
  Payload = unknown
> = (value: Value, payload?: Payload) => void;
