import React, { Component } from 'react';
import Person from "./Person/Person"

class PersonList extends Component{

    constructor(){
        super()
        this.toggleHandler = this.toggleHandler.bind(this);
    }

    state = {
        persons: [
            {name: "One", age: 25, id:"1"},
            {name: "Two", age: 20, id:"2"},
            {name: "Three", age: 30 , id:"3"}
        ],
        showNames: false
    }

    removePersonHandler = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons});
    }

    toggleHandler() {
        this.setState({showNames: !this.state.showNames});
    }

    render(){

        const style = {
            border: '1px solid gray',
            color: '#fff',
            backgroundColor: 'green',
            padding: '6px 18px',
            borderRadius: '4px',
            boxShadow: '0 2px 3px grey'
        }

        this.textChangeHandler = (event, personId) => {
            let persons = [...this.state.persons];
            let indexOfChange = persons.findIndex(person => person.id === personId);
            persons[indexOfChange].name = event.target.value;
            this.setState({persons:persons});
        }

        let personsList = null;
        if(this.state.showNames){
            personsList = this.state.persons.map((person, index) => {
                return <Person key={person.id} name={person.name} age={person.age} remove={ () => this.removePersonHandler(index)} changed={ (event) => this.textChangeHandler(event, person.id)}/>
            })
        }

        style.backgroundColor = this.state.showNames ? 'green' : 'red';

        return(
            <div>
                <button style={style} onClick={this.toggleHandler}>Toggle List</button>
                {personsList}
            </div>
        )
    }
}

export default PersonList;