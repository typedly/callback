import { ErrorCallback } from '../lib';
import { ErrorPayload } from '@typedly/payload';
import { ErrorContext } from '@typedly/context';

const errorCallback: ErrorCallback = (context, payload, message, type) => {
  console.log(context, payload, message, type);
  return false;
}

errorCallback(false, {'rule': "empty"}, "Type error message", TypeError);
errorCallback(false, {'rule': "empty"}, (value, payload) => 'Type error message', TypeError);

const errorPayloadCallback: ErrorCallback<
  ErrorContext,
  ErrorPayload,
  void,
  typeof Error
> = (context, payload, message, type) => {
  console.group(`ErrorCallback`);
  console.log(`context.code`, context.code);
  console.log(`context.details`, context.details);
  console.log(`context.message`, context.message);
  console.log(`context.status`, context.status);
  console.log(`context.timestamp`, context.timestamp);
  console.log(`context.type`, context.type);

  console.log(`payload.code`, payload?.code);
  console.log(`payload.description`, payload?.description);
  console.log(`payload.status`, payload?.status);

  console.log(`message`, message);
  console.log(`type`, type);

  console.log(context, payload);
  console.groupEnd();
}

errorPayloadCallback({
    code: 3005,
    details: 'Connection failed.',
    type: 'network',
  }, {
    code: 404,
    status: 'HTTP Aborted'
  },
  "The connection with the object failed.",
  TypeError
);
