import TestUtils from 'react/lib/ReactTestUtils';

export default component => {
  const shallowRenderer = TestUtils.createRenderer();

  shallowRenderer.render(component);

  return shallowRenderer.getRenderOutput();
};
