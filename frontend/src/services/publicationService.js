import q from 'q';
import $ from 'jquery';

const fetchPublicationsFor = postCode => (
  q($.ajax({
    type: 'GET',
    url: `/publications/${postCode}`,
  }))
    .catch(() => { throw new Error('OH NO PIGEONS'); })
    .then(data =>
      data.publications
    )
);

export default { fetchPublicationsFor };
