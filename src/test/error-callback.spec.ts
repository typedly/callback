import { ErrorCallback } from '../lib';

const errorCallback: ErrorCallback<boolean, any, {rule: "empty"}, boolean> = (status, value, payload, message, type) => {
  console.log(status, value, payload, message, type);
  return false;
}

errorCallback(false, 'test', {'rule': "empty"}, "Type error message", TypeError);
