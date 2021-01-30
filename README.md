# Satisfaction Form
 > This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Screenshots](#screenshots)

## General info
This app provides a dynamic multistep form that can be configured through a config file.
The data is sent to a realtime database (firebase).
 
## Technologies
* [ReactJs](https://en.reactjs.org/)
* [React hook form](https://react-hook-form.com/)
* [Tailwindcss](https://tailwindcss.com/)

## Setup
First, you need to install the project dependencies
`yarn install`

Then you can start the app by running
`yarn start`

The form steps and fields can be configured by editing the config file : 
`src/config/config.js` 

The config const defines the steps of the form, each element of the config array is a step with a title, a description and a list of fields.

```js
{
        'title': 'Step Title',
        'desc': 'Step Description.',
        'fields': [
            {
                'type': 'textfield',
                'name': 'first_field',
                'placeholder': 'First Field',
                'validation': {
                    'required': 'The first field is required.',
                    'minLength': {
                        'value': 5,
                        'message': 'The first field is too short'
                    }
                }
            },
            {
                'type': 'textfield',
                'name': 'second_field',
                'placeholder': 'Second Field',
                'validation': {
                    'required': 'The second field is required.',
                    'maxLength': {
                        'value': 10,
                        'message': 'The first field is too long'
                    }
                }
            }
        ]
    }
```


## Features
* Add multiple steps to the form 
* Add multiple fields to a step 
* Add validation to each field
* Send data to firebase

## Screenshots
![Screenshot_1](.screenshot.png)