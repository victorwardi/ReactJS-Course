import React, {Component} from 'react';
import './App.css';
import Persons from "../components/Persons/Persons";
import AuthContext from "../context/auth-context";

class App extends Component {

    state = {
        persons: [
            {id: 1, name: "Victor", age: 34},
            {id: 2, name: "Caetano", age: 18},
            {id: 3, name: "Ursula", age: 29},
            {id: 4, name: "Viviani", age: 20}
        ],

        authenticated: false
    };

    loginHandler = () => {
        const isAuthenticated = this.state.authenticated;
        this.setState({authenticated: !isAuthenticated});
    };

    render() {
        return (
            <>
                <button onClick={this.loginHandler}>{this.state.authenticated ? 'Logout' : 'Login'}</button>
                {this.state.authenticated ? 'Welcome!' : 'Please, log in.'}
                <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
                    <Persons persons={this.state.persons}/>
                </AuthContext.Provider>
            </>
        );
    }
}

export default App;
