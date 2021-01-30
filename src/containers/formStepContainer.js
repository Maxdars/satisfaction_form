import React from 'react';
import Field from '../components/field'
import { find as _find } from 'lodash'

const FormStepContainer = (props) => {
let step = props.step_config
let step_title = step.title  
let fields = step.fields
let values = props.values;

    return (
        <>
            <h4 className="text-center text-3xl font-semibold mt-8 uppercase">
                {step_title}
            </h4>
            <p className="text-center m-8 mb-20 italic">
                {step.desc}
            </p>
            {
                fields.map((field, i) => {
                    return (
                        <div key={i} className="field-container">
                            <Field 
                                register = {props.register} 
                                errors = {props.errors}
                                field_config = {field}
                                value = {_find(values, (item) => {return item.name === field.name}) ? _find(values, (item) => {return item.name === field.name}).value : ''}
                            />
                        </div>
                    )
                })
            }
        </>
    )
}

export default FormStepContainer;