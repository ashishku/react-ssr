import viewRenderer from '../../renderer/server';

module.exports = ( initialState = {} ) => {
  return viewRenderer(initialState);
};
