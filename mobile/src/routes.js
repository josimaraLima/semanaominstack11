import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigation} from '@react-navigation/stack';
import Incidents from './pages/incidents';
import Detail from './pages/detaill';

const AppStack = createStackNavigation();
export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator ScreenOptions ={{ headerShowh: false}}>
                <AppStack.Screen name="Incidents" component = {Incidents}>

                </AppStack.Screen>
                <AppStack.Screen name="Detail" component = {Detail}>

                </AppStack.Screen>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}