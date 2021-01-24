import React from 'react';

const Field = (props) => {
    let field = props.field_config;
    let input = null;

    switch (field.type) {
        // Text field.
        case('textfield'):
            input = <input type="textfield" name={field.name} defaultValue={props.value} ref={props.register(field.validation)} placeholder={field.placeholder}/>
            break;

        // Text area.
        case('textarea'):
            input = <textarea name={field.name} defaultValue={props.value} ref={props.register(field.validation)} rows="5" cols="33" placeholder={field.placeholder}/>
            break;

        // Radio buttons.
        case('radio'):
            input = field.values.map((item, i) => {
                let checked = item.value === props.value ? true : false;
                return (
                    <div key={i}>
                        <input type="radio"  id={item.id} name={field.name} value={item.value} ref={props.register(field.validation)} defaultChecked={checked}/>
                        <label>{item.value}</label>
                    </div>
                )
            })
            break;

        default:
            input = null;
    }

    return (
        <>
            {input}
            { props.errors[field.name] && <span style={{color: 'red'}}> {props.errors[field.name].message} </span> }
        </>
    );
}

export default Field;