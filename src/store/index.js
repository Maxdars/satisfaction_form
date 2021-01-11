import React, {createContext, useReducer} from 'react';
import { initialState } from './initialState';
import { reducer } from './reducer'

const store = createContext(initialState);
const { Provider } = store;


const StateProvider = ( { children} ) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Provider value={{ state, dispatch}}> { children } </Provider>
}

export { store, StateProvider }