import React, {Component} from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";


class App extends Component {

    state = {
        users: [
            {name: "Victor", age: 34},
            {name: "Caetano", age: 18},
            {name: "Ursula", age: 29},
            {name: "Viviani", age: 20}
        ],
        showUsers: false,
    }

    userNameChangedHandler = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    toggleUsersHandler = () => {
        const doesShow = this.state.showUsers;
        this.setState({showUsers: !doesShow})
    }


    render() {

        let users = null;

        if (this.state.showUsers) {
            users = (
                <div>
                    {this.state.users.map( user => {
                        return ( <UserOutput userName={user.name}/>)
                    })}
                </div>
            )
        }

        return (
            <div className="App">
                <button onClick={this.toggleUsersHandler}>Toggle Users</button>
                <UserInput onChange={this.userNameChangedHandler} currentName={this.state.userName}/>
                {users}
            </div>
        );
    }
}

export default App;
