import React from 'react';
import AddExerciseButton from './addExerciseButton'
import InputResultsButton from './inputResultsButton'

class ExerciseTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <h1>ExerciseTable.js</h1>
                <AddExerciseButton />
                <InputResultsButton />
            </div>
           
        )
    }
}

export default ExerciseTable;