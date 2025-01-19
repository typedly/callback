// Type.
import { ErrorMessage } from "./error-message.type";
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
