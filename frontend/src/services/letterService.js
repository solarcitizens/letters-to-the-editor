import q from 'q';
import $ from 'jquery';

const sendLetter = (letter, confirmationPageUrl) => (
  q($.ajax({
    type: 'POST',
    url: '/letters',
    data: letter,
    success: () => {
      window.location = confirmationPageUrl;
    },
  })
  )
);

export default { sendLetter };
