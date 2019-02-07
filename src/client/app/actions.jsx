const actionTypes = {
  EXPAND: 'EXPAND',
  TOGGLE: 'TOGGLE',
  COLLAPSE: 'COLLAPSE',
  UPDATE_DEVICE_WIDTH: 'UPDATE_DEVICE_WIDTH'
};

export const expandNav = () => ({
  type: actionTypes.EXPAND
});

export const collapseNav = () => ({
  type: actionTypes.COLLAPSE
});

export const toggleNav = () => ({
  type: actionTypes.TOGGLE
});

export const updateDeviceWidth = (width) => ({
  type: actionTypes.UPDATE_DEVICE_WIDTH,
  deviceWidth: width
})

export default actionTypes;