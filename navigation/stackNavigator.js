import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import AddMovie from '../Components/AddMovie/addMovie';
import MovieDetails from '../Components/MovieDetails/movieDetails';
import UpdateMovie from '../Components/Update/updateMovie';
import routes from '../Utils/routes';

const stack = createNativeStackNavigator();
const StackNavigation = () => {
    return (
        
        <stack.Navigator>
            <stack.Screen name={routes.tab} component={TabNavigation} options={{headerShown:false}}></stack.Screen>
            <stack.Screen  name={routes.add} component={AddMovie}
            ></stack.Screen>
            <stack.Screen  name={routes.details} component={MovieDetails}
            ></stack.Screen>
            <stack.Screen  name={routes.update} component={UpdateMovie}
            ></stack.Screen>
        </stack.Navigator>
    );
}



export default StackNavigation;
