export type ErrorMessage<Context, Payload> = (context: Context, payload: Payload) => string;
