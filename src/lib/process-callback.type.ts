/**
 * @description Represents the type of the function that processes the element and optionally return a value.
 * @export
 * @template Element The type of the processed element.
 * @template [Return=void | Promise<void>] The type of the returned value.
 */
export type ProcessCallback<Element, Return = void | Promise<void>> = (element: Element) => Return;
