import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import routes from '../Utils/routes';
import Movies from '../Components/Home/movies';
import About from '../Components/About/about';
import Favorites from '../Components/Fav/favs';
import Contact from '../Components/Contact/contact';
import MovieDetails from '../Components/MovieDetails/movieDetails';
import AddMovie from '../Components/AddMovie/addMovie';


const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            style={{ backgroundColor: "black" }}
            screenOptions={{
                tabBarStyle: styles.tabContainer,
                tabBarLabelStyle: styles.tabBarLabel,
            }}
            tab
        >

            <Tab.Screen
                name={routes.home}
                component={Movies}
                
            />
            <Tab.Screen
                name={routes.about}
                component={About}
            />
            <Tab.Screen
                name={routes.favorites}
                component={Favorites}
            />
            <Tab.Screen
                name={routes.contact}
                component={Contact}

            />
            {/* <Tab.Screen
                name={routes.details}
                component={MovieDetails}
            > */}

            {/* </Tab.Screen> */}
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: "#fff",
        marginHorizontal: 5,
        marginTop: 10,
        borderRadius: 20,
    },
    tabBarLabel: {
        fontSize: 10,
        color: 'black', // Add this to ensure label text is visible
        fontWeight: 'bold',
    },

});

export default TabNavigation;
