import React from 'react';
import AddExerciseButton from './addExerciseButton'
import InputResultsButton from './inputResultsButton'

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
                <h1>ExerciseTable.js</h1>
                <AddExerciseButton name="Add Exercise.." handleClick={this.hello}/>
                <InputResultsButton name="Input Results.." handleClick={this.hello} />
            </div>
           
        )
    }
}

export default ExerciseTable;