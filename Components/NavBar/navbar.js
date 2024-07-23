//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import routes from '../../Utils/routes';
import * as RootNavigation from '../../navigation/RefNav.js';

// create a component
const NavBar = ({navigation}) => {
    const counter = useSelector(state => state.counter.counter);
    const {navigate}=useNavigation();
    return (
        <View style={styles.navbar}>
            <View style={styles.navLink}>
            <Text style={styles.linkText}>Fav: {counter}</Text>
            </View>
        <TouchableOpacity activeOpacity={0.8} onPress={() =>navigation.navigate(routes.home)} style={styles.navLink}>
            <Text style={styles.linkText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate(routes.about)} style={styles.navLink}>
            <Text style={styles.linkText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate(routes.contact)} style={styles.navLink}>
            <Text style={styles.linkText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={() =>navigation.navigate(routes.favorites)} style={styles.navLink}>
            <Text style={styles.linkText}>Favorites</Text>
            {/* <Text style={styles.favoriteCounter}>{counter}</Text> */}
        </TouchableOpacity>
    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        paddingVertical: 10,
    },
    navLink: {
        padding: 10,
    },
    linkText: {
        fontWeight: 'bold',
        color: 'teal',
    },
    favoriteCounter: {
        position: 'absolute',
        top: 5,
        right: 10,
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 5,
        color: 'white',
    },
});

//make this component available to the app
export default NavBar;
