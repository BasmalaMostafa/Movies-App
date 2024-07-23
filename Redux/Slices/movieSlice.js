import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData=createAsyncThunk("movies/getData",async ()=>{
    try {
    const response = await axios.get("http://192.168.43.81:3000/results");
  //  console.log(response.data);
  if (response.status !== 200) {
    throw new Error('Failed to fetch data');
  }
  return response.data;
} catch (error) {
  throw error; 
}
})


export const addData = createAsyncThunk('movies/addData', async (movieData) => {
    try {
      const response = await axios.post("http://192.168.43.81:3000/results", {
        "id": (movieData.id).toString(),
        "original_title": movieData.name,
        "vote_average": +movieData.rate,
        "overview": movieData.desc,
        "backdrop_path": movieData.image
      });
      console.log('Movie added:', response.data);
      return response.data; 
    } catch (error) {
      console.error('Error adding movie:', error);
      throw error;
    }
  });

  export const updateData = createAsyncThunk('movies/updateData', async (movieData) => {
    try {
        const response = await axios.put(`http://192.168.43.81:3000/results/${movieData.id}`, {
            "id": (movieData.id).toString(),
            "original_title": movieData.name,
            "vote_average": +movieData.rate,
            "overview":movieData.desc,
            "backdrop_path":movieData.image
          });
          console.log('Movie Updated:', response.data);
      return response.data; 
    } catch (error) {
      console.error('Error updating movie:', error);
      throw error;
    }
  });

  export const deleteData = createAsyncThunk('movies/deleteData', async (id) => {
    try {
        const response = await axios.delete(`http://192.168.43.81:3000/results/${id}`);
          console.log('Movie deleted:', response.data);
      return response.data; 
    } catch (error) {
            console.error('Error deleting movie:', error);
      throw error;
    }
  });

const moviesSlice=createSlice({
    name:"movies",
    initialState:{movies:[]},
    extraReducers:(builder)=>{
        builder
        .addCase(getData.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            state.movies=action.payload;
        })
        .addCase(addData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.movies.push(action.payload);
          })
          .addCase(updateData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            const index = state.movies.findIndex(movie => movie.id === action.payload.id);
            if (index !== -1) {
              state.movies[index] = action.payload;
            }
          })
          .addCase(deleteData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.movies = state.movies.filter(movie => movie.id !== action.payload.id);
          })
    }
})


//export const {} = moviesSlice.actions;
export default moviesSlice.reducer;