import q from 'q';
import $ from 'jquery';

const getConfig = campaignName => (
  q($.ajax({
    type: 'GET',
    url: `/config/${campaignName}`,
  }))
    .catch(() => { throw new Error('Unable to retrieve config'); })
    .then(config => (config))
);

export default { getConfig };
