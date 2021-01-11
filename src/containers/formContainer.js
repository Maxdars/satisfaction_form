import React, { useEffect, useContext } from 'react';
import { store } from '../store'

// Containers.
import FormStepContainer from './formStepContainer';

const FormContainer = (props) => {
    const { dispatch } = useContext(store);

    useEffect(() => {
        dispatch({type: 'INITIALIZE', value: {}});
    }, [])

    return (
        <div>
            My form container
            <FormStepContainer />
            <FormStepContainer />
            <FormStepContainer />
        </div>
    )
}

export default FormContainer;