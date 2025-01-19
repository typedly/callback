export type ProcessCallback<Element, Return = void | Promise<void>> = (element: Element) => Return;
