/* eslint-disable import/prefer-default-export */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, About } from '../Pages';

const routesObj = {
    home: {
        name: 'Home',
        component: Home,
    },
    about: {
        name: 'About',
        component: About,
    },
}

const routes = [
    routesObj.about,
];

// ensure home is the last item in the list
routes.unshift(routesObj.home);

const Stack = createStackNavigator();


const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator>
            {routes.map((route) => (
                <Stack.Screen name={route.name} component={route.component}/>
            ))}
        </Stack.Navigator>
    </NavigationContainer> 
);

export { Routes };