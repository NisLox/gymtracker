import React, {useState} from 'react';
import AddExerciseButton from './addExerciseButton'
import InputResultsButton from './inputResultsButton'
import MyForm from '../myForm'
import MyTable from './myTable'
import { generate } from 'shortid'

const ExerciseTable = () => {
    const [rows, setRows] = useState([{
        id: "",
        firstName: "",
        lastName: "",
        email: "",
    }])

    return (
        <div>
                <MyForm onSubmit={(data) => {
                    setRows(currentRows => [...currentRows, {
                        id:generate(),
                    ...data
                    }])
                }} />
            <h1>ExerciseTable.js</h1>
            <MyTable rows={rows} />
            
            
            <AddExerciseButton name="Add Exercise.." />
            <InputResultsButton name="Input Results.."/>
        </div>
        
    )

}


export default ExerciseTable;