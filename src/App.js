import React, {Component} from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {

    state = {
        userInput: '',
        users: [
            {id: 1, name: "Victor", age: 34},
            {id: 2, name: "Caetano", age: 18},
            {id: 3, name: "Ursula", age: 29},
            {id: 4, name: "Viviani", age: 20}
        ],
        showUsers: false,
    }

    addUserHandler = (user) => {
        const users = [...this.state.users];
        users.push(user);
        this.setState({users: users});
    }

    deleteUserHandler = (personIndex) => {
        const users = [...this.state.users];
        users.splice(personIndex, 1);
        this.setState({users: users});
    }

    toggleUsersHandler = () => {
        const doesShow = this.state.showUsers;
        this.setState({showUsers: !doesShow})
    }

    inputChangeHandler = (event) => {
        this.setState(
            {
                userInput: event.target.value
            }
        );
    }

    deleteCharHandler = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({
            userInput : updatedText
        })

    }


    render() {

        const charList = this.state.userInput.split('').map((char, index) => {
            return <Char
                character={char}
                key={index}
                clicked={() => this.deleteCharHandler(index)}/>
        })

        let users = null;

        if (this.state.showUsers) {
            users = (
                <div>
                    {this.state.users.map((user, index) => {
                        return <UserOutput
                            click={() => this.deleteUserHandler(index)}
                            userName={user.name}
                            key={user.id}
                        />
                    })}
                </div>
            )
        }

        return (
            <div className="App">
                <button onClick={this.addUserHandler}>add</button>
                <p>
                    <input type="text" onChange={this.inputChangeHandler} value={this.state.userInput}/>
                </p>
                {charList}
                <Validation inputLength={this.state.userInput.length}/>
                <UserInput onChange={this.userNameChangedHandler} currentName={this.state.userName}/>
                {users}
            </div>
        );
    }
}

export default App;
