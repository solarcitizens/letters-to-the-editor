'use strict';

function addSignature(input) {
  return `${input.body}\n\n--\n${input.firstName} ${input.lastName}\n${input.email}\n${input.phone}\n${input.street}, ${input.city}, ${input.state} ${input.postCode}`;
}

function transformLetter(input) {
  return {
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      phone: input.phone,
      street: input.street,
      city: input.city,
      state: input.state,
      postCode: input.postCode,
      optedIn: input.optedIn,
      publications: input.publications,
      body: addSignature(input),
      subject: input.subject,
      isBot: input.isBot
  };
}

module.exports = {
  transformLetter: transformLetter
};
