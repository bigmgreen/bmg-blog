import React from 'react';
import ReactDOM from 'react-dom';

function Index () {
    return (
        <div className="container">
            <h1>Hello React!</h1>
        </div> 
        );
}

ReactDOM.render(<Index />, document.getElementById('app'));

export default Index;