import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  searchText: "",
  genre: "",
  publicationYear: "",
};
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searched: (state, action) => {
      state.searchText = action.payload;
    },

    resetSearch: (state) => {
      state.searchText = "";
    },
    genreFilter: (state, action) => {
      state.genre = action.payload;
    },
    yearFilter: (state, action) => {
      state.publicationYear = action.payload;
    },
  },
});

export const {genreFilter, yearFilter, searched, resetSearch} = filterSlice.actions;
export default filterSlice.reducer;
