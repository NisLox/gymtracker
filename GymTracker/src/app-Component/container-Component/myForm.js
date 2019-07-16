import React from 'react';
import { TextField, Button } from '@material-ui/core';
import {Formik, Form} from 'formik'

const MyForm = ( {onSubmit}) => {
    return (
        <div>
                <Formik initialValues={{Exercise:'', Set1: '', Set2: '', Set3: ''}} 
                onSubmit={(values, {resetForm}) => {
                    onSubmit(values)
                    resetForm();
                }}
                >
                    {({values, handleChange, handleBlur,}) => (
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
                 
                    </Form>
                    )} 
                </Formik>
            </div>  
              
        )
    }

export default MyForm;