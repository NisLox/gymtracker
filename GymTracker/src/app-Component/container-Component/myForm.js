import React from 'react';
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
                <Formik initialValues={{Exercise:'', Set1: '', Set2: '', Set3: ''}} onSubmit={values => {this.props.onSubmit(values)
                }} >
                    {({values, handleChange, handleBlur}) => (
                        <Form>
                            <div>
                                <TextField 
                                placeholder="Exercise..."
                                name="Exercise" 
                                value={values.Exercise} 
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                />
                            </div>
                        
                            <div>
                                <TextField
                                    placeholder="Set1"
                                    name="Set1" 
                                    value={values.Set1} 
                                    onChange={handleChange} 
                                    onBlur={handleBlur}
                                />
                            </div>
                            
                            <div>
                                <TextField 
                                    placeholder="Set2"
                                    name="Set2" 
                                    value={values.Set2} 
                                    onChange={handleChange} 
                                    onBlur={handleBlur}
                                />
                            </div>

                            <div>
                                <TextField 
                                    placeholder="Set3"
                                    name="Set3" 
                                    value={values.Set3} 
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