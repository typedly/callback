import { ErrorCallback } from '../lib';

const errorCallback: ErrorCallback = (context, payload, message, type) => {
  console.log(context, payload, message, type);
  return false;
}

errorCallback(false, {'rule': "empty"}, "Type error message", TypeError);
errorCallback(false, {'rule': "empty"}, (value, payload) => 'Type error message', TypeError);
