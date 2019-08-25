import React from 'react';
import './app.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Dhruv'
        };
    }
    render() {
        return (<div>
            <h1 className='title'>
                Welcome to the jungle foo {this.state.name}
            </h1>
        </div>);
    }
}