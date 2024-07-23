const reducer=(state,{type,payload}) =>{
    if(type=="AddMovie"){
        return [...state,payload];
    }else if(type=="GetMovies"){
        return payload;
    }
    return state;
}

export default reducer;