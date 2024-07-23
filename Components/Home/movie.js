import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData } from '../../Redux/Slices/movieSlice';
import Icon from 'react-native-vector-icons/FontAwesome';
import { addFavorites, removeFavorite } from '../../Redux/Slices/favSlice';
import { decrementCounter, incrementCounter } from '../../Redux/Slices/counterSlice';
import routes from '../../Utils/routes';
import results, { moviesContextPro } from '../../Data/res';
import { useNavigation } from '@react-navigation/native';

const Movie = ({ movieName, imgPath, movieId }) => {
    const {navigate} =useNavigation();
    const { movies,setMovies} =useContext(moviesContextPro) ;
    const dispatch = useDispatch();

    const favorites = useSelector(state => state.favorites.favorites);
    const [isFavorite, setIsFavorite] = useState(favorites.includes(movieId));
    const id="21";

    const handleRemovingFav = () => {
        dispatch(removeFavorite(movieId));
        setIsFavorite(false);
        dispatch(decrementCounter());
    }
  

    const handleAddingFav = () =>{
        dispatch(addFavorites(movieId));
        setIsFavorite(true);
        dispatch(incrementCounter());
    }


    const handleDelete = async () => {
       // dispatch(deleteData(movieId));
        const updatedMovies = movies.filter(movie => movie.id !== id);
        setMovies(updatedMovies);
    };

    return (
        <View style={styles.movieCard}>
            <View style={styles.movieImage}>
                <Image style={styles.image} source={{ uri: imgPath }} alt="movie img" />
            </View>
            <View style={styles.movieDetails}>
                <Text style={styles.movieName}>{movieName}</Text>
            </View>
            <View style={styles.buttonContainer}>
            <Icon name= {isFavorite ? "heart":"heart-o"} size={27} color="red" onPress={isFavorite ? handleRemovingFav : handleAddingFav} style={{marginRight:150}}/>

                <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={()=>navigate(routes.update,{ movieId: movieId })}>
                    <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={[styles.button, styles.deleteButton]} onPress={handleDelete}>
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    movieCard: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
        width:350,
        height:310,
        marginRight:10,
    },
    movieImage: {
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
    },
    movieDetails: {
        marginBottom: 10,
    },
    movieName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: 'teal',
        marginLeft: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    deleteButton: {
        backgroundColor: 'red',
    },
});

export default Movie;
