import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { moviesContextPro } from '../../Data/res';

const UpdateMovie = ({ route }) => {
  //const { id } = route.params;
  const id="21";
  

  const { movies,setMovies} = useContext(moviesContextPro);
  const dispatch = useDispatch();

  const [movieData, setMovieData] = useState({
    name: '',
    desc: '',
    rate: 0,
    image: null,
    id:''
  });

  useEffect(() => {
    const movie = movies.find(movie => movie.id === id);
    // if (movie) {
      setMovieData({
        name: movie.original_title,
        desc: movie.overview,
        rate: movie.vote_average,
        image: movie.backdrop_path,
        id: id
      });
    // }
  }, [movies]);


  const handleChange = (name, value) => {
    setMovieData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

//   const handleChooseImage = () => {
//     ImagePicker.launchImageLibrary({ mediaType: 'photo' }, response => {
//       if (!response.didCancel) {
//         setMovieData(prevState => ({
//           ...prevState,
//           image: response.uri,
//         }));
//       }
//     });
//   };

  const handleSubmit = async () => {
    //dispatch(updateData(movieData));
    setMovies((prevMovies) => [...prevMovies, movieData]);

      const updatedMovies = movies.filter(m => m.id !== id);

      const updatedMoviesArray = [...updatedMovies,movieData];

      setMovies(updatedMoviesArray);
    
    setMovieData({
      name: '',
      desc: '',
      rate: 0,
      image: null
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => handleChange('name', text)}
        value={movieData.name}
        placeholder="Movie Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => handleChange('rate', text)}
        value={movieData.rate}
        placeholder="Movie Rate"
        keyboardType="numeric"
      />
      <TextInput
        style={[styles.input, styles.desc]}
        onChangeText={text => handleChange('desc', text)}
        value={movieData.desc}
        placeholder="Movie Description"
        multiline
      />

      {/* <TouchableOpacity style={styles.imagePicker} onPress={handleChooseImage}>
        <Text>{movieData.image ? 'Change Image' : 'Choose Image'}</Text>
      </TouchableOpacity>
      {movieData.image && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: movieData.image }} style={styles.image} />
        </View>
      )} */}

<View style={styles.formGroup}>
            <TextInput
                style={styles.formInput}
                onChangeText={text => handleChange('image', text)}
                value={movieData.image}
                placeholder="Movie Image Link"
                name="image"
            />
        </View>

      <TouchableOpacity activeOpacity={0.8} style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff', 
        marginTop:30
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#f9f9f9', 
        height:50
      },
      desc: {
        height: 150,
        textAlignVertical: 'top', 
        backgroundColor: '#f9f9f9', 
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
        height: 50,
        backgroundColor: '#f9f9f9', 
      },
      submitButton: {
        backgroundColor: 'teal',
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        height:50
      },
      submitButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
      },
});

export default UpdateMovie;
