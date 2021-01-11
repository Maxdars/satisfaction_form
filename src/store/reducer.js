import * as actions from '../actions'

export const reducer = (state, action) => {
    switch(action.type) {
    //   case 'CHANGE_INPUT':
    //     return StateHelpers.inputChanged(state, action.value);

      case 'INITIALIZE':
        console.log(actions.initializeData(state))
        return actions.initializeData(state);
          
      default:
        return state;
    };
  }