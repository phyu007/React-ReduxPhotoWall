import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './Task'
import Title from './Title'

class Main extends Component {
    render() {
        return(
            <div>
                <Title title={['To Do']}/>
                <List tasks={['Mow the law','walk the dog']}/>
                <List tasks={['hose the driveway','finish the laundry']}/>      

             </div>
        )
    }
}

export default Main
