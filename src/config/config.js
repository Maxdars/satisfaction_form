export const config = [
    {
        'title': 'Step 1',
        'fields': [
            {
                'type': 'radio',
                'name': 'satisfaction',
                'validation': {
                    'required': true
                },
                'values': [
                    {
                        'id': 'not_satisfied',
                        'value': 'not_satisfied',
                        'label': 'Not satisfied'
                    },
                    {
                        'id': 'satisfied',
                        'value': 'satisfied',
                        'label': 'Satisfied'
                    },
                    {
                        'id': 'neutral',
                        'value': 'neutral',
                        'label': 'Neutral'
                    }
                ]
            },
            {
                'type': 'textarea',
                'name': 'comment',
                'placeholder': 'Want to leave a comment ?',
                'validation': {}
            }
        ]
    },
    {
        'title': 'Step 2',
        'fields': [
            {
                'type': 'textfield',
                'name': 'first_name',
                'placeholder': 'First name',
                'validation': {
                    'required': true,
                    'minLength': 4
                }
            },
            {
                'type': 'textfield',
                'name': 'last_name',
                'placeholder': 'Last name',
                'validation': {
                    'required': true,
                    'minLength': 4
                }
            },
            {
                'type': 'textfield',
                'name': 'email',
                'placeholder': 'Email',
                'validation': {
                    'required': true,
                    'minLength': 4
                }
            }
        ]
    },
    {
        'title': 'Step 3',
        'fields': [
            {
                'type': 'textfield',
                'name': 'phone',
                'placeholder': 'Phone',
                'validation': {
                    'required': true,
                    'minLength': 4
                }
            },
            {
                'type': 'textfield',
                'name': 'address',
                'placeholder': 'Address',
                'validation': {
                    'required': true,
                    'minLength': 4
                }
            }
        ]
    }  
]
