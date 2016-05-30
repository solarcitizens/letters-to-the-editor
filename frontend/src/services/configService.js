import q from 'q';
import $ from 'jquery';

const getConfig = () => (
  q($.ajax({
    type: 'GET',
    url: 'config',
  }))
    .catch(() => { throw new Error('Unable to retrieve config'); })
    .then(config => (config))
);

export default { getConfig };
