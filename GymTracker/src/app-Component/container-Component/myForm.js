import React from 'react';
import ExerciseTable from './exerciseTable-Component/exerciseTable'
import { TextField } from '@material-ui/core';
import {Formik, Form} from 'formik'

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    onSubmit() {
        console.log("hello")
    }

    render() {
       //https://www.youtube.com/watch?v=6VmVYi9yrAA
       //https://www.youtube.com/watch?v=pNjeuU4Jwnc

        
        return (
            <div>
                <h1>MyForm</h1>
                <Formik initialValues={{firstName:'', lastName: '', email: ''}} onSubmit={values => {this.onSubmit(values)}} >
                    {({values, handleChange, handleBlur}) => (
                        <Form>
                        <TextField 
                            name="firstName" 
                            value={values.firstName} 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                        />

                        <pre>
                            {JSON.stringify(values, null,2)}
                        </pre>

                    </Form>
                    )} 
                </Formik>
            </div>  
        )
    }
}

export default MyForm;