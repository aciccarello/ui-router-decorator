import {IState, IStateController} from './state.interface';

/**
 * Helper function to pull the state config object off of a class. Abstracts the property
 * name used and allows getting the config without Typescript complaining.
 *
 * @param target Class decorated with @StateConfig
 */
export default function getStateConfig(target: any): IState {
  return (<IStateController> target).$uiStateConfig;
}