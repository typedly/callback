/**
 * @description The type of error message to use with context and payload.
 * @export
 * @template Context The generic type value of context in which the error occurred.
 * @template Payload The generic type value of payload to gives additional data.
 */
export type ErrorMessage<Context, Payload> = (context: Context, payload: Payload) => string;
