/**
 * @description Represents the function that takes the status of the invoked action on the value.
 * @export
 * @template Status The type of the status.
 * @template [Value=unknown] The type of the value that the action is applied to. Defaults to, `unknown`.
 * @template [Payload=unknown] The type of additional data that may be provided. Defaults to `unknown`.
 * @template [Return=Status] The type of the returned value. Defaults to, `Return`.
 */
export type StatusCallback<Status, Value = unknown, Payload = unknown, Return = Status> = 
  (status: Status, value: Value, payload?: Payload) => Return;
