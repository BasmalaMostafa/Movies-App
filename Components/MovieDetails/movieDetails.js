//import liraries
import { useRoute } from '@react-navigation/native';
import React, { Component, useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { moviesContext } from '../../Redux/moviesProvider';
import { moviesContextPro, results } from '../../Data/res';

// create a component
const MovieDetails = () => {
    const {movies} = useContext(moviesContextPro);
    const [movie, setMovie] = useState({});
//const movieID =useParams();
const {id}=useRoute();
const movieID="21";

useEffect(() => {
   setMovie(movies.find((mov)=>mov.id==movieID));
}, [movies]);

if (!movie) {
    return <Text>Loading ...</Text>;
}

    return (
        <View style={styles.movieDetailsContainer}>
            {
                console.warn("hhhhhhhhhhh")
            }
            <View style={styles.movieImage}>
                <Image style={styles.image} source={{ uri: movie.backdrop_path }} />
            </View>
            <View>
                <Text style={styles.title}>{movie.original_title}</Text>
            </View>
            <View style={styles.movieInfo}>
                <Text style={styles.infoText}>Overview: {movie.overview}</Text>
            </View>
            <View style={styles.movieInfo}>
                <Text style={styles.infoText}>Rating: {movie.vote_average}</Text>
            </View>
        </View>
    );
};

// define your styles

const styles = StyleSheet.create({
    movieDetailsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '5%',
    },
    movieImage: {
        marginBottom: 20,
    },
    image: {
        width: 300,
        height: 400,
        borderRadius: 8,
    },
    title: {
        color: 'teal',
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 10,
    },
    movieInfo: {
        textAlign: 'center',
        width: '80%',
        marginBottom: 10,
    },
    infoText: {
        color: 'gray',
        fontSize: 16,
    },
});


//make this component available to the app
export default MovieDetails;
