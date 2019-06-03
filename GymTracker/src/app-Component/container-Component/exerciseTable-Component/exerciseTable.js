import React from 'react';
import AddExerciseButton from './addExerciseButton'
import InputResultsButton from './inputResultsButton'
import Table from 'react-bootstrap/Table'

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
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Exercise</th>
                        <th>Set 1</th>
                        <th>Set 2</th>
                        <th>Set 3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Tricep pull downs</td>
                        <td>10x20</td>
                        <td>30x20</td>
                        <td>40x20</td>
                        </tr>
                        <tr>
                        <td>Bench Press</td>
                        <td>60x10</td>
                        <td>70x10</td>
                        <td>80x10</td>
                        </tr>
                        <tr>
                        <td>Sit ups</td>
                        <td>50</td>
                        <td>30</td>
                        <td>20</td>
                        </tr>
                    </tbody>
                </Table>
                <AddExerciseButton name="Add Exercise.." handleClick={this.hello}/>
                <InputResultsButton name="Input Results.." handleClick={this.hello} />
            </div>
           
        )
    }
}

export default ExerciseTable;