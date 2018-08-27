const rootReducer = (state, action) => {
  switch ( action.type ) {
    case 'SET_DEVICE_ROTATION':
      return {
        ...state,
        deviceRotation: action.r,
      }

    default:
      return state;
  }
}

export default rootReducer;
