import React, {useState} from 'react';

import MyForm from '../myForm'
import MyTable from './myTable'
import { generate } from 'shortid'

const ExerciseTable = () => {
    const [rows, setRows] = useState([{
        id: "",
        Exercise: "",
        Set1: "",
        Set2: "",
        Set3: "",
    }])

    return (
        <div>
                <MyForm onSubmit={data => {
                    setRows(currentRows => [
                        {
                        id:generate(),
           
                            ...data
                        },
                        ...currentRows, 
                    ]);
                }} />
            <MyTable rows={rows} />
        </div>   
    )
}

export default ExerciseTable;