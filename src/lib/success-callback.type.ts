/**
 * @description Represents a callback function invoked after a successful action.
 * @export
 * @template [Value=unknown] The type of the value associated with the successful action. Defaults to `unknown`.
 * @template [Payload=unknown] The type of additional data that may be provided. Defaults to `unknown`.
 */
export type SuccessCallback<
  Value = unknown,
  Payload = unknown,
> = (value: Value, payload?: Payload) => void;
