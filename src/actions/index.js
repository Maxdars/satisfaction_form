/**
 * Initiliazing data action handler.
 */
export const initializeData = (state) => {
    let config = state.config;
    let values = [];

    config.forEach(step => {
        let fields = step.fields;

        fields.forEach(field => {
            values.push({
                'name': field.name,
                'value': ''
            })
        });
    });

    let newState = {
        'steps_count': config.length,
        'values': values
    }

    return Object.assign({}, state, newState);
}

/**
 * Reseting the form action handler.
 */
export const resetForm = (state) => {
    let emptyValues = state.values;
    emptyValues.map((item) => Object.assign(item, {'value': ''}));

    return Object.assign({}, state, {
        'values': emptyValues,
        'done': false,
        'step': 1           
    }); 
}

/**
 * Changing step action handler.
 */
export const changeStep = (state, value) => {
    switch(value.submit_type) {
        case('next_step'):
            return Object.assign({}, state, {
                'step': state.step + 1,
                'values': getUpdatedValues(value.data, state.values)            
            }); 

        case('previous_step'):
            return Object.assign({}, state, {
                'step': state.step - 1,
                'values': getUpdatedValues(value.data, state.values)
            }); 
        
        default:
            return state;
    }
}

/**
 * Sending Data action Handler.
 */
export const sendData = (state, value) => {
    let updated_state = Object.assign({}, state, {
        'values': getUpdatedValues(value.data, state.values),
        'done': true           
    }); 

    return updated_state;
}

/**
 * Helper function.
 * Update state values with the form submited data.
 */
const getUpdatedValues = (data, values) => {
    return values.map((item) => { 
        if (data.hasOwnProperty(item.name)) {
            return Object.assign(item, {'value': data[item.name]})
        }
        return item;
    })
}