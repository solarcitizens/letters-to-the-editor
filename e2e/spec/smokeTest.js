const casper = window.casper;

function navigateTo(url) {
  const baseUrl = casper.cli.get('url');
  console.log("********************************");
  console.log(baseUrl + url);

  return casper.start(baseUrl + url)
    .then(() => casper.waitForSelector('body'));
}

function loadFormPage() {
  return navigateTo('/');
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
