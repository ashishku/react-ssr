import AppActions from './actions';

const AppReducer = (state = {
  expandNav: true
}, action = {}) => {
  switch (action.type) {
    case AppActions.TOGGLE:
      return Object.assign({}, state, {expandNav : !state.expandNav});
    case AppActions.EXPAND:
      return Object.assign({}, state, {expandNav : true});
    case AppActions.COLLAPSE:
      return Object.assign({}, state, {expandNav : false});
    case AppActions.UPDATE_DEVICE_WIDTH:
      return Object.assign({}, state, {deviceWidth : action.deviceWidth});
    default:
      return state;
  }
};

export default AppReducer;