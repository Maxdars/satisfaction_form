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

export const changeStep = (state, value) => {
    switch(value) {
        case('+1'):
            return Object.assign({}, state, {'step': state.step + 1}); 
            break;

        case('-1'):
            return Object.assign({}, state, {'step': state.step - 1}); 
            break;
        
        default:
            return state;

    }
}