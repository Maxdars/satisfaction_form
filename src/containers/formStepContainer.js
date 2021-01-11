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
            <h3>{step_title}</h3>
            {
                fields.map((field, i) => {
                    return (
                        <div key={i} className="field-container">
                            <Field 
                                register = {props.register} 
                                errors = {props.errors}
                                field_config = {field}
                                value = {_find(props.values, (item) => {return item.name === field.name}) ? _find(props.values, (item) => {return item.name === field.name}).value : ''}
                            />
                        </div>
                    )
                })
            }
        </>
    )
}

export default FormStepContainer;