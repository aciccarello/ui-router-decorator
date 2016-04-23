import registerState from './register-state';
import StateConfig from './state-config';

describe('registerState', () => {
  xit('should register the state with angular');

  it('should be annotated for minified dependenci injection', () => {
    @StateConfig({name: 'test'})
    class TestClass {}

    let configFn = registerState(TestClass);

    expect(configFn.$inject).toBeDefined();
  });
});