import q from 'q';
import $ from 'jquery';

const sendLetter = letter => (
  q($.ajax({
    type: 'POST',
    url: '/letters',
    data: letter,
    success: () => {
      console.log('Submitted!');
    },
    error: res => {
      console.log('Ajax failed');
      console.log(res);
    },
  })
  )
);

export default { sendLetter };
