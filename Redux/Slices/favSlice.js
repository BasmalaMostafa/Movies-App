import { createSlice} from "@reduxjs/toolkit";

const favSlice = createSlice({
    name: "favorites",
    initialState:{favorites:[]},
    reducers:{
        addFavorites: (state, action) => {
            state.favorites.push(action.payload);
          },
          removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(movie => movie !== action.payload);
           // console.log(current(state.favorites.filter(movie => movie.id !== action.payload)));
          },
    }
})


export const {addFavorites,removeFavorite} = favSlice.actions;
export default favSlice.reducer;