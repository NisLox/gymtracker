import React from 'react';
import AddExerciseButton from './addExerciseButton'
import InputResultsButton from './inputResultsButton'
import MyForm from '../myForm'

class ExerciseTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    hello() {
        console.log("AddExerciseButton")
    }
    render() {

        
        return (
            <div>
                 <MyForm onSubmit={({email, firstName, lastName}) => {
                     console.log(email, firstName, lastName)
                 }} />
                <h1>ExerciseTable.js</h1>
                <AddExerciseButton name="Add Exercise.." onClick={this.hello}/>
                <InputResultsButton name="Input Results.." onClick={this.hello} />
            </div>
           
        )
    }
}

export default ExerciseTable;