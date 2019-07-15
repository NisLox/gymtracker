import React, {useState} from 'react';
import AddExerciseButton from './addExerciseButton'
import InputResultsButton from './inputResultsButton'
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
                <MyForm onSubmit={(data) => {
                    setRows(currentRows => [...currentRows, {
                        id:generate(),
                    ...data
                    }])
                }} />
            <MyTable rows={rows} />
            <br />
            <AddExerciseButton name="Add Exercise.." />
            <InputResultsButton name="Input Results.."/>
        </div>
        
    )

}


export default ExerciseTable;