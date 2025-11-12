export type OnPropertyChangeCallback<T, Payload> = 
  <K extends keyof T>(key: K, value: T[K], oldValue: T[K], payload?: Payload) => void;