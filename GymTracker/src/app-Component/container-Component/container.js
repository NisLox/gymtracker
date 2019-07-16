import React from 'react';
import ExerciseTable from './exerciseTable-Component/exerciseTable'

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <ExerciseTable />
            </div>  
        )
    }
}

export default Container;