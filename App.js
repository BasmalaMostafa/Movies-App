import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Movies from './Components/Home/movies';
import About from './Components/About/about';
import Contact from './Components/Contact/contact';
import AddMovie from './Components/AddMovie/addMovie';
import MovieDetails from './Components/MovieDetails/movieDetails';
import routes from './Utils/routes';
import MoviesProvider from './Redux/moviesProvider';
import NavBar from './Components/NavBar/navbar';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import Store from './Redux/store';
import UpdateMovie from './Components/Update/updateMovie';
import Favorites from './Components/Fav/favs';
import { navigationRef } from './navigation/RefNav';
import TabNavigation from './navigation/TabNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import MoviesContextProvider from './Data/res';
import StackNavigation from './navigation/stackNavigator';
import { AppRegistry } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (

    <GestureHandlerRootView>
    <Provider store={Store}>
      <>
      <MoviesContextProvider>
        <StatusBar hidden></StatusBar>
        <SafeAreaView style={{ backgroundColor: 'black' }}></SafeAreaView>
        <NavigationContainer >
          {/* <TabNavigation>
          </TabNavigation> */}
          <StackNavigation></StackNavigation>
        </NavigationContainer>
        </MoviesContextProvider>
      </>
    </Provider>
    </GestureHandlerRootView>

  );
}
