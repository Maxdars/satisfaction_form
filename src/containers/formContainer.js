import React, { useEffect, useContext } from 'react';
import { store } from '../store'
import { useForm } from "react-hook-form";

// Containers.
import FormStepContainer from './formStepContainer';

const FormContainer = (props) => {
    const { state, dispatch } = useContext(store);
    const { register, handleSubmit, errors, reset } = useForm();

    // Submit handlers.
    const onReset = (e) => { dispatch({type: 'RESET', value: {}}) }
    const onSubmit = (data, e) => {
        let submit_type = e.nativeEvent.submitter.dataset.submitType;
        switch(submit_type) {
            case "next_step":
            case "previous_step":
                dispatch({type: 'CHANGE_STEP', value: {
                    'submit_type': submit_type,
                    'data': data
                }});
                break;

            default:
                dispatch({type: 'SEND_DATA', value: {
                    'submit_type': submit_type,
                    'data': data
                }});
        }
        // Should reset, something goes wrong with the fields values.
        reset(data);
    };

    useEffect(() => {
        dispatch({type: 'INITIALIZE', value: {}});
    }, [])

    let step_config = state.config[state.step - 1];
    let current_step = state.step;

    // @todo: check which submit should be visible in the current step.
    let submit = [
        <input type="submit" value="Next" data-submit-type="next_step"/>,
        <input type="submit" value="Previous" data-submit-type="previous_step"/>,
        <input type="submit" value="Save" data-submit-type="send_data"/>
    ]

    if (!state.done) {
        return (
            <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-container">
                    <h2> { `Step ${current_step}/${state.config.length}` } </h2>
                    <div className="step-container">
                        <FormStepContainer register={register} errors={errors} step_config={step_config} values={state.values}/>
                    </div>
                </div>
                <input type="submit" value="Next" data-submit-type="next_step"/>
                <input type="submit" value="Previous" data-submit-type="previous_step"/>
                <input type="submit" value="Save" data-submit-type="send_data"/>
            </form>
            </>
        )
    }
    else {
        return (
            <div className="thank-you-page">
                <h1> Thank you ! </h1>
                <p>
                    Form submitted successfully
                </p>
                <button onClick={onReset}> Return to form </button>
            </div>
        )
    }
    
}

export default FormContainer;