import React from 'react';
import ExerciseTable from './exerciseTable-Component/exerciseTable'
import { TextField, Button } from '@material-ui/core';
import {Formik, Form} from 'formik'

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
       //https://www.youtube.com/watch?v=6VmVYi9yrAA
       //https://www.youtube.com/watch?v=pNjeuU4Jwnc

        
        return (
            <div>
                <h1>MyForm</h1>
                <Formik initialValues={{firstName:'', lastName: '', email: ''}} onSubmit={values => {this.props.onSubmit(values)
                }} >
                    {({values, handleChange, handleBlur}) => (
                        <Form>
                            <div>
                                <TextField 
                                placeholder="First name.."
                                name="firstName" 
                                value={values.firstName} 
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                />
                            </div>
                        
                            <div>
                                <TextField
                                    placeholder="Last name.."
                                    name="lastName" 
                                    value={values.lastName} 
                                    onChange={handleChange} 
                                    onBlur={handleBlur}
                                />
                            </div>
                            
                            <div>
                                <TextField 
                                    placeholder="Email.."
                                    name="email" 
                                    value={values.email} 
                                    onChange={handleChange} 
                                    onBlur={handleBlur}
                                />
                            </div>
                        
                        <Button type="submit">submit</Button>
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