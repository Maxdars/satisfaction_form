import React, { useEffect, useContext } from 'react';
import { store } from '../store'
import { useForm } from "react-hook-form";

// Containers.
import FormStepContainer from './formStepContainer';

const FormContainer = (props) => {
    const { state, dispatch } = useContext(store);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => console.log(data);
    const next = event => dispatch({type: 'CHANGE_STEP', value: '+1'});;
    const previous = event => dispatch({type: 'CHANGE_STEP', value: '-1'});;

    useEffect(() => {
        dispatch({type: 'INITIALIZE', value: {}});
    }, [])

    let step_config = state.config[state.step - 1];

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-container">
                <h2>My form container</h2>
                <div className="step-container">
                    <FormStepContainer register={register} errors={errors} step_config={step_config} values={state.values}/>
                </div>
            </div>
            <input type="submit" />
        </form>
        <button onClick={next}> + 1 </button>
        <button onClick={previous}> - 1 </button>
        </>
    )
}

export default FormContainer;