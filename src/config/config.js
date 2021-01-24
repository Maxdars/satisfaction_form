export const config = [
    {
        'title': 'Step 1',
        'fields': [
            {
                'type': 'radio',
                'name': 'satisfaction',
                'validation': {
                    'required': 'This field is required.'
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
                'validation': {
                    'minLength': {
                        'value': 10,
                        'message': 'You should write at least 10 characters.'
                    }
                }
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
                    'required': 'The firstname is required.',
                    'minLength': {
                        'value': 3,
                        'message': 'The firstname should be at least 3 characters long.'
                    }
                }
            },
            {
                'type': 'textfield',
                'name': 'last_name',
                'placeholder': 'Last name',
                'validation': {
                    'required': 'The lastname is required.',
                    'minLength': {
                        'value': 3,
                        'message': 'The lastname should be at least 3 characters long.'
                    }
                }
            },
            {
                'type': 'textfield',
                'name': 'email',
                'placeholder': 'Email',
                'validation': {
                    'required': 'The email is required.',
                    'pattern': {
                        'value': /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                        'message': 'This email is not valid.'
                    }
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
                    'required': 'The phone number is required.',
                    'minLength': {
                        'value': 8,
                        'message': 'The phone number is too short'
                    },
                    'maxLength': {
                        'value': 8,
                        'message': 'The phone number is too big'
                    },
                    'pattern': {
                        'value': /^[0-9]+$/,
                        'message': 'The phone number should only contain numbers.'
                    }
                }
            },
            {
                'type': 'textfield',
                'name': 'address',
                'placeholder': 'Address',
                'validation': {
                    'required': 'The address is required.',
                    'minLength': {
                        'value': 10,
                        'message': 'The address should be at least 10 characters long.'
                    }
                }
            }
        ]
    }  
]
