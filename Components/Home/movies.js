//import liraries
import React, { Component, useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Movie from './movie';
import { moviesContext } from '../../Redux/moviesProvider';
import routes from '../../Utils/routes';
import { useNavigation } from '@react-navigation/native';
import { moviesContextPro } from '../../Data/res';


// create a component
const Movies = () => {
    const { movies,SetMovies} =useContext(moviesContextPro) ;
    //console.warn(movies)
    const {navigate} =useNavigation();
    //console.warn("kkkkkkkkk")

    if (movies.length === 0) {
        return <Text style={{fontSize:20}}>Loading ...</Text>;
    }
    return (
        
        <View style={styles.container}> 
        
        <ScrollView>
            <View style={{flexWrap: "wrap", marginTop: 20,flexDirection:'row'}}>
            {movies.map((movie) => (
                <TouchableOpacity activeOpacity={0.8} key={movie.id} onPress={()=>navigate(routes.details,{ movieId: movie.id })}>
                   
                <Movie
                    movieName={movie.original_title}
                    imgPath={movie.backdrop_path}
                    movieId={movie.id}
                /></TouchableOpacity>
            ))}
            </View>
        </ScrollView>
        {/* <Link to="/add" style={{ textDecoration: "none", color: "white" }}> */}
        {/* <View style={{ position: "fixed", bottom: 20, right: 20 }}>
        <button style={{fontSize:30,fontWeight:"bold",backgroundColor: "teal", color: "white", borderRadius: "50%", width: 60, height: 60, border: "none", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)", display: "flex", justifyContent: "center", alignItems: "center" }}>
            +
        </button>
        </View> */}
        <View style={styles.addButtonContainer}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigate(routes.add)} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
    {/* </Link> */}
    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        marginHorizontal:20,
        marginBottom:50,
        
    },
    addButtonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    addButton: {
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: 'teal',
        color: 'white',
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3, 
    },
    addButtonText: {
        color: 'white',
        fontWeight:'bold',
        fontSize:25
    },

});

//make this component available to the app
export default Movies;
