import smokeTests from './smokeTest';
const casper = window.casper;

smokeTests.forEach(smokeTest => casper.test.begin(smokeTest.description, test => {
  smokeTest.testRun(test);
  casper.run(() => test.done());
}));
