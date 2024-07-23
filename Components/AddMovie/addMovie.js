//import liraries
import React, { Component, useContext, useReducer, useState } from 'react';
import { View, Text, StyleSheet,Button, TouchableOpacity } from 'react-native';
import { moviesContext } from '../../Redux/moviesProvider';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { addData } from '../../Redux/Slices/movieSlice';
import { moviesContextPro, results } from '../../Data/res';
import UpdateMovie from '../Update/updateMovie';

// create a component
const AddMovie = () => {
    const {movies} = useContext(moviesContextPro);
   //const [ movies,SetMovies] =useState(results) ;
    const dispatch = useDispatch();

    const [movieData, setMovieData] = useState({
        name: '',
        desc: '',
        rate: 0,
        image: null,
        id: (+(movies[movies.length-1].id)+1).toString()
    });

    const handleChange = (name, value) => {
        setMovieData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };


    // const handleChooseImage = () => {
    //     ImagePicker.launchImageLibrary({ mediaType: 'photo' }, response => {
    //         if (!response.didCancel) {
    //             setMovieData(prevState => ({
    //                 ...prevState,
    //                 image: response.uri,
    //             }));
    //         }
    //     });
    // };

    const handleSubmit = async(e) => {
        e.preventDefault();
        //dispatch(addData(movieData));
       // UpdateMovie(movieData);

        setMovieData({
            name: '',
            desc: '',
            rate: 0,
            image: null,
        });
    };

    return (
        <View style={styles.formContainer}>
        <View style={styles.formGroup}>
            <TextInput
                style={styles.formInput}
                onChangeText={text => handleChange('name', text)}
                value={movieData.name}
                placeholder="Movie Name"
                name="name"
                required
            />
        </View>
        <View style={styles.formGroup}>
            <TextInput
                style={styles.formInput}
                onChangeText={handleChange}
                value={movieData.rate}
                placeholder="Movie Rate"
                name="rate"
                keyboardType="numeric"
                required
            />
        </View>
        <View style={styles.formGroup}>
            <TextInput
                style={[styles.formInput,styles.desc]}
                onChangeText={text => handleChange('desc', text)}
                value={movieData.desc}
                placeholder="Movie Description"
                name="desc"
                required
            />
        </View>
        {/* <View>
            {movieData.image == null ? (
                <TouchableOpacity activeOpacity={0.8} onPress={handleChooseImage} style={styles.submitBtn} >
            <Text style={styles.txt}>Choose Image</Text></TouchableOpacity>
            ) : (
                <View>
                    <Image source={{ uri: movieData.image }} style={styles.image} />
                </View>
            )}
        </View> */}
         <View style={styles.formGroup}>
            <TextInput
                style={styles.formInput}
                onChangeText={text => handleChange('image', text)}
                value={movieData.image}
                placeholder="Movie Image Link"
                name="image"
                required
            />
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={handleSubmit} style={styles.submitBtn} >
            <Text style={styles.txt}>ADD</Text></TouchableOpacity>
    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    formContainer: {
        width:350,
        marginHorizontal:20,
        padding: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginTop: '20%',
        justifyContent: 'center', // Aligns the form vertically center
    },
    formGroup: {
        marginBottom: 20,
    },
    formInput: {
        width: '100%',
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        height: 50, // Reduced height for text inputs
    },
    submitBtn: {
        padding: 12,
        backgroundColor: 'teal',
        borderRadius: 5,
        marginTop:20
    },
    txt:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    },
    submitBtnHover: {
        backgroundColor: 'teal',
    },
    inputFocus: {
        outlineWidth: 2,
        outlineColor: 'teal',
    },
    desc:{
        height:150
    }
});

//make this component available to the app
export default AddMovie;
