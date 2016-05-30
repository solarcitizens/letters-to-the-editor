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
    error: res => {
      console.log('Ajax failed');
      console.log(res);
    },
  })
  )
);

export default { sendLetter };
