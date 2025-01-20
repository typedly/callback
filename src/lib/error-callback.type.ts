// Type.
import { ErrorMessage } from "./error-message.type";
/**
 * @description Represents the type of function invoked after the error occurred.
 * @export
 * @template [Context=unknown] The type of the context in which error occurred.
 * @template [Payload=unknown] The type of additional data related to the occurred error.
 * @template [Return=void] 
 * @template {typeof Error} [Type=typeof Error] 
 */
export type ErrorCallback<
  Context = unknown,
  Payload = unknown,
  Return = void,
  Type extends typeof Error = typeof Error
> = (
  context: Context,
  payload?: Payload,
  message?: string | ErrorMessage<Context, Payload>,
  type?: Type
) => Return;
