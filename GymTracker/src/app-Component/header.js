import React from 'react';

class header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div class="jumbotron">
                    <h1 class="display-4">GymTracker</h1>
                    <p class="lead">By Will Burgess</p>
                </div>
            </div>
        
        )
    }
}

export default header;