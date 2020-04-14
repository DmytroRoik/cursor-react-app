const SWITCH_CHANGE = 'SWITCH_CHANGE';

const initialState = {
  balance: 265279.07,
  switchName: 'charge',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_CHANGE: {
      return {
        ...state, switchName: action.payload,
      };
    }
    default:
      return state;
  }
};

export const switchChanger = text => ({
  type: SWITCH_CHANGE,
  payload: text,
});

export default rootReducer;
