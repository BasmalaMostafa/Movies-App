import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeFavorite } from '../../Redux/Slices/favSlice';
import { decrementCounter } from '../../Redux/Slices/counterSlice';
import Icon from 'react-native-vector-icons/FontAwesome';

const FavMovie = ({ movieName, imgPath, movieId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    //console.log(typeof movieId);
    dispatch(removeFavorite(movieId));
    dispatch(decrementCounter());
  };

  return (
    <View style={styles.movieCard}>
      <View style={styles.movieImage}>
        <Image style={styles.image} source={{ uri: imgPath }} />
      </View>
      <View style={styles.movieDetails}>
        <Text style={styles.movieName}>{movieName}</Text>
      </View>
      <View style={styles.updateButtonContainer}>
      <Icon name= {"heart"} size={27} color="red" onPress={handleDelete}/>
        <TouchableOpacity style={styles.updateButton} onPress={() => console.log('Update')}>
          <Text style={styles.updateButtonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  movieCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  heartText: {
    fontSize: 20,
    color: 'red',
  },
  movieImage: {
    alignItems: 'center',
  },
  image: {
    width: 280,
    height: 300,
  },
  movieDetails: {
    alignItems: 'center',
    marginTop: 10,
  },
  movieName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  updateButtonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  updateButton: {
    backgroundColor: 'teal',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  updateButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FavMovie;
