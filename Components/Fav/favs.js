import React, { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { moviesContext } from '../../Redux/moviesProvider';
import FavMovie from './fav';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { moviesContextPro, results } from '../../Data/res';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites.favorites);
  const {movies }= useContext(moviesContextPro);

  const renderFavMovie = ({ item }) => {
    const favMov = movies.find(mov => mov.id === item);
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigate(routes.details,{ movieId: favMov.id })}>
      <FavMovie
        movieName={favMov.original_title}
        imgPath={favMov.backdrop_path}
        movieId={favMov.id}
      /></TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={renderFavMovie}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    alignItems: 'center',
    paddingTop: 50,
  },
});

export default Favorites;
