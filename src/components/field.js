import React from 'react';

const Field = (props) => {
    let field = props.field_config;
    let input = null;

    switch (field.type) {
        case('textfield'):
            input = <input type="textfield" name={field.name} defaultValue={props.value} ref={props.register} />
            break;

        case('textarea'):
            input = <textarea name={field.name} defaultValue={props.value} ref={props.register} rows="5" cols="33"/>
            break;

        case('radio'):
            input = field.values.map((item, i) => {
                return (
                    <div key={i}>
                        <input type="radio" id={item.id} name={field.name} value={item.value} />
                        <label>{item.value}</label>
                    </div>
                )
            })
            break;

        default:
            input = null;
    }

    return input;
}

export default Field;