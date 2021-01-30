import React from 'react';

const Field = (props) => {
    let field = props.field_config;
    let input = null;
    let className = null;

    switch (field.type) {
        // Text field.
        case('textfield'):
            className = props.errors[field.name] ? 
                "my-3 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white border border-red-500 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                :
                "my-3 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full";
            input = <input type="textfield" name={field.name} defaultValue={props.value} ref={props.register(field.validation)} placeholder={field.placeholder} className={className} />
            break;

        // Text area.
        case('textarea'):
            className = props.errors[field.name] ? 
                "my-3 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white border border-red-500 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                :
                "my-3 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full";            
            input = <textarea name={field.name} defaultValue={props.value} ref={props.register(field.validation)} rows="5" cols="33" placeholder={field.placeholder} className={className} />
            break;

        // Radio buttons.
        case('radio'):
            input = field.values.map((item, i) => {
                let checked = item.value === props.value ? true : false;
                return (
                    <div key={i} className="mx-2 px-2">
                        <input type="radio" id={item.id} name={field.name} value={item.value} ref={props.register(field.validation)} defaultChecked={checked} className="bg-red-600" />
                        <label className="ml-1">{item.label}</label>
                    </div>
                )
            });
            break;

        // Select.
        case('select'):
            className = props.errors[field.name] ? 
                "my-3 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white border border-red-500 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                :
                "my-3 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full";            
            
            input = <select name={field.name} defaultValue={props.value} ref={props.register(field.validation)} className={className}>
                {field.values.map((item, i) => {
                    return (
                        <option key={i} value={item.value}> {item.label} </option>
                    )
            })}
        </select>
        break;

        default:
            input = null;
    }

    return (
        <React.Fragment>
            <div className="flex justify-center">
                {input}
            </div>
            { props.errors[field.name] && <p class="text-red-500 text-xs italic">{props.errors[field.name].message}</p>}
        </React.Fragment>
    );
}

export default Field;