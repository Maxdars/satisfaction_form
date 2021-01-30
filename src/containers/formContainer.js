import React, { useEffect, useContext } from 'react';
import { store } from '../store'
import { useForm } from "react-hook-form";
import '../config/firebase';

// Containers.
import FormStepContainer from './formStepContainer';
import Stepper from '../components/stepper';

const FormContainer = (props) => {
    const { state, dispatch } = useContext(store);
    const { register, handleSubmit, errors, reset } = useForm({
        mode: 'onBlur'
    });

    // Submit handlers.
    const onReset = (e) => { dispatch({type: 'RESET', value: {}}) }
    const onSubmit = (data, e) => {
        let submit_type = e.nativeEvent.submitter.dataset.submitType;
        switch(submit_type) {
            case "next_step":
            case "previous_step":
                e.preventDefault();
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

    let steps_count = state.config.length;
    let step_config = state.config[state.step - 1];
    let current_step = state.step;
    let steps_titles = [];
    state.config.forEach(element => {
        steps_titles.push(element.title);
    });

    // Check which submit should be visible in the current step.
    let submit = [];
    if (current_step === steps_count) {
        submit = [
            <div className="flex mt-10 justify-between">
                <button type="submit" value="Previous" data-submit-type="previous_step" className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                    hover:bg-gray-700  
                    bg-gray-900 
                    text-gray-50
                    text-teal-700 
                    border duration-200 ease-in-out 
                    border-teal-600 transition">
                    <div className="flex leading-5 justify-items-center	">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left w-5 h-5 mr-1">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        Previous
                    </div>
                </button>
                <button type="submit" value="Save" data-submit-type="send_data" className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                    hover:bg-indigo-400  
                    bg-indigo-700 
                    text-gray-50 
                    text-teal-700 
                    border duration-200 ease-in-out 
                    border-teal-600 transition">
                    <div class="flex leading-5"> 
                        Send
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" className="feather feather-chevron-left w-5 h-5 ml-2">
                            <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                        </svg>
                    </div>
                </button>
            </div>
        ];
    }
    else if (current_step === 1) {
        submit = [
            <div class="flex mt-10 justify-end">
                <button type="submit" value="Next" data-submit-type="next_step" className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                    hover:bg-indigo-400  
                    bg-indigo-700
                    text-gray-50
                    text-teal-700 
                    border duration-200 ease-in-out 
                    border-teal-600 transition">
                    <div class="flex leading-5"> Next
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-5 h-5 ml-1">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                </button>
            </div>
        ];
    }
    else {
        submit = [
            <div className="flex mt-10 justify-between">
                <button type="submit" value="Previous" data-submit-type="previous_step" className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                    hover:bg-gray-700  
                    bg-gray-900 
                    text-gray-50
                    text-teal-700 
                    border duration-200 ease-in-out 
                    border-teal-600 transition">
                    <div className="flex leading-5 justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left w-5 h-5 mr-1">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        <span>
                            Previous
                        </span>
                        
                    </div>
                </button> 
                <button type="submit" value="Next" data-submit-type="next_step" className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                    hover:bg-indigo-400  
                    bg-indigo-700 
                    text-gray-50
                    text-teal-700 
                    border duration-200 ease-in-out 
                    border-teal-600 transition">
                    <div className="flex leading-5"> Next
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right w-5 h-5 ml-1">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                </button>            
            </div>        
        ];
    }

    if (!state.done) {
        return (
            <div className="container m-auto px-4">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-8/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-50">
                            <div className="flex-auto p-5 lg:p-10">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-container">
                                        <Stepper currentStep={current_step} stepsCount={steps_count}  stepsTitles={steps_titles} />
                                        <div className="step-container">
                                            <FormStepContainer register={register} errors={errors} step_config={step_config} values={state.values}/>
                                        </div>
                                    </div>
                                    <div className="buttons-container">
                                        {submit}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container m-auto px-4">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-8/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-50">
                            <div className="flex-auto p-5 lg:p-10">
                                <h3 className="text-center text-3xl font-semibold my-3">
                                    Thank you for your feedback !
                                </h3>
                                <h5 className="text-center text-xl font-semibold my-3">
                                    The data was sent successfully.
                                </h5>
                                <div className="flex justify-center mt-8">
                                    <button type="submit" value="Previous" data-submit-type="previous_step" onClick={onReset} className="text-base rounded-l-none border-l-0  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                                        hover:bg-gray-700  
                                        bg-gray-900 
                                        text-gray-50
                                        text-teal-700 
                                        border duration-200 ease-in-out 
                                        border-teal-600 transition">
                                        <div className="flex leading-5">
                                            Return to form 
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default FormContainer;