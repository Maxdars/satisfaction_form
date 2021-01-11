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