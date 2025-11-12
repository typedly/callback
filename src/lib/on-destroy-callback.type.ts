/**
 * @description The callback function performed on destroy.
 * @export
 * @template Payload The type of the optional payload.
 */
export type OnDestroyCallback<Payload> =
  (payload?: Payload) => void;