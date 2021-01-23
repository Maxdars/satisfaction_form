import * as actions from '../actions'

export const reducer = (state, action) => {
    switch(action.type) {
      case 'CHANGE_STEP':
        return actions.changeStep(state, action.value);

      case 'INITIALIZE':
        return actions.initializeData(state);

      case 'RESET':
        return actions.resetForm(state);

      case 'SEND_DATA':
        return actions.sendData(state, action.value);
          
      default:
        return state;
    };
  }