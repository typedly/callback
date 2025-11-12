/**
 * @description A callback type for a property value accessed through a getter.
 * @export
 * @param this The object instance of type `Obj` that the getter is operating on.
 * @param key The key of the property being accessed, constrained to the keys of `Obj`.
 * @param previousValue The value that was previously returned by the getter for this property.
 * @param value The current value of the property being accessed.
 * @param instance The object instance of type `Obj` that is passed to the callback.
 * @returns The modified value of the property or `void` if no changes are made.
 * @template O The type of the object that holds the property.
 * @template {keyof O} K The type of the property key, constrained to the keys of `O`.
 */
export type GetterCallback<O, K extends keyof O> =
  (this: O, key: K, previousValue: O[K], value: O[K], instance: O) => O[K] | void;
