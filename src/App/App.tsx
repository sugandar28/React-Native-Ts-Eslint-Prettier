/* eslint-disable import/prefer-default-export */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from "../Redux/Store";
import { Home, About } from '../Pages';


const Stack = createStackNavigator();

function App(){
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="About" component={About} />
                </Stack.Navigator>
            </NavigationContainer> 
        </Provider>
    );
}


export { App }; 