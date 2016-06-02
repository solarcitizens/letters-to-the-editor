import config from './configHelper';
const casper = window.casper,
      baseUrl = casper.cli.get('url');

function navigateTo(url) {


  return casper.start(baseUrl + url)
    .then(() => casper.waitForSelector('body'));
}

function loadFormPage() {
  return navigateTo(`/campaigns/${config.aCurrentCampaign()}`);
}

const submitButton = 'button[type="submit"]';

const pageLoads = {
  description: 'The app has started and is serving the page',
  testRun: test => {
    loadFormPage()
    .then(() => test.assertExists(submitButton));
  },
};

export default [
  pageLoads,
];
