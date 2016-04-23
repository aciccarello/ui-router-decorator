import StateConfig from './state-config';
import {IStateController} from './state.interface';

describe('StateConfig', () => {
  it('should put the configuration on the class', () => {
      @StateConfig({ name: 'test' })
      class TestClass {};

      expect((TestClass as any as IStateController).$uiStateConfig.name).toEqual('test');
  });
});