import Q from 'q';
import $ from 'jquery';

const fetchPublicationsFor = postCode => {
  return Q($.ajax({
    type: 'GET',
    url: '/publications/' + postCode
  }))
    .catch(() => {throw new Error('OH NO PIGEONS');})
    .then(data => {
      return data.publications;
    });
};

export default { fetchPublicationsFor };
