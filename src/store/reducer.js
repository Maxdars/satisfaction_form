import * as actions from '../actions'

export const reducer = (state, action) => {
    switch(action.type) {
    //   case 'CHANGE_INPUT':
    //     return StateHelpers.inputChanged(state, action.value);

      case 'CHANGE_STEP':
        return actions.changeStep(state, action.value);

      case 'INITIALIZE':
        return actions.initializeData(state);
          
      default:
        return state;
    };
  }