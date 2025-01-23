/**
 * @description A callback type for a property value set through a setter.
 * @export
 * @param this The object instance of type `Obj` that the setter is operating on.
 * @param value The new value to set for the property.
 * @param previousValue The value that was previously assigned to the property before the setter was called.
 * @param key The key of the property being set, constrained to the keys of `Obj`.
 * @param instance The object instance of type `Obj` that is passed to the callback.
 * @returns void
 * @template Obj The type of the object that holds the property.
 * @template {keyof Obj} Key The type of the property key, constrained to the keys of `Obj`.
 */
export type SetterCallback<Obj, Key extends keyof Obj> = (
  this: Obj,
  value: Obj[Key],
  previousValue: Obj[Key],
  key: Key,
  instance: Obj
) => void;
