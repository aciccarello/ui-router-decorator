import StateConfig from './state-config';
import getStateConfig from './get-state-config';

describe('getStateConfig', () => {
  it('should get the state definition off of he annotated class', () => {
    @StateConfig({name: 'test'})
    class TestController {};

    expect(getStateConfig(TestController).name).toEqual('test');
  });
});