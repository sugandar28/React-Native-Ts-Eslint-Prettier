import 'react-native-gesture-handler';
import React from 'react';

import { Provider } from 'react-redux';
import store from "../Redux/Store";
import { Routes } from '../Routes/Routes'

function App(){
    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    );
}

export { App }; 