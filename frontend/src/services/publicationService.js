import q from 'q';
import $ from 'jquery';

const fetchPublicationsFor = postCode => (
  q($.ajax({
    type: 'GET',
    url: `/publications/${postCode}`,
  }))
    .catch(() => { throw new Error(`Unable to retrieve publications for postCode ${postCode}`); })
    .then(data =>
      data.publications
    )
);

export default { fetchPublicationsFor };
