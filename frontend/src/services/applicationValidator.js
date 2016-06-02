import inputValidator from '../lib/inputValidator';
import _ from 'lodash';

const applicationFieldsChecks = {
  firstName: inputValidator.isValidName,
  lastName: inputValidator.isValidName,
  street: inputValidator.isValidText,
  city: inputValidator.isValidText,
  state: inputValidator.isValidText,
  postCode: inputValidator.isValidText,
  phone: inputValidator.isValidPhone,
  email: inputValidator.isValidEmail,
  subject: inputValidator.isValidText,
  body: inputValidator.isValidTextBlock,
};

const isValidDetails = application => (
  _.reduce(applicationFieldsChecks, (errors, checkFn, applicationFieldKey) => {
    if (!application || !checkFn(application[applicationFieldKey])) {
      errors.push(applicationFieldKey);
    }

    return errors;
  }, [])
);

const isValid = application => _.flatten([isValidDetails(application)]);

export default { isValid };
