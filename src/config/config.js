export const config = [
    {
        'title': 'Title 1',
        'desc': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
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
        'title': 'Title 2',
        'desc': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        'fields': [
            {
                'type': 'select',
                'name': 'gender',
                'validation': {
                    'required': 'This field is required.'
                },
                'values': [
                    {
                        'value': 'male',
                        'label': 'Male'
                    },
                    {
                        'value': 'female',
                        'label': 'Female'
                    }
                ]
            },
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
        'title': 'Title 3',
        'desc': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        'fields': [
            {
                'type': 'textfield',
                'name': 'phone',
                'placeholder': 'Phone',
                'validation': {
                    'required': 'The phone number is required.',
                    'minLength': {
                        'value': 10,
                        'message': 'The phone number is too short'
                    },
                    'maxLength': {
                        'value': 10,
                        'message': 'The phone number is too long'
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
