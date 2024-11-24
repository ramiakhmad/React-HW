import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import User from './components/User.jsx';
import UserForm from './components/UserForm.jsx';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <User />
                <UserForm />
            </div>
        </Provider>
    );
}

export default App;