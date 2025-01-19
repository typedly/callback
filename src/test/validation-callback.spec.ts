import { ValidationCallback } from '../lib';

const validationCallback: ValidationCallback<string, { isBoolean?: boolean, isString?: boolean }> 
  = (result, value, payload) => (console.log(result, value, payload), false);

validationCallback(false, 'the string', {'isString': true});
