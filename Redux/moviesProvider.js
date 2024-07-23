//import liraries
import React, { Component, createContext, useEffect, useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import reducer from './reducer';
import axios from 'axios';
import { getData } from './Slices/movieSlice';

// create a component
export const moviesContext = createContext();

const MoviesProvider = ({children}) => {
    const [movies,dispatch]=useReducer(reducer,[]);

    useEffect(()=>{
        axios.get(getData())
        .then(response=>{
            dispatch({type:'GetMovies',payload:response.data})
            //console.warn(response.data)
        }
        )
            .catch(err=>console.log(err));


    },[dispatch]);

    return (
        <moviesContext.Provider  value={{movies}}>
        <View>
            {children}
        </View>
        </moviesContext.Provider>
    );
};

//make this component available to the app
export default MoviesProvider;
