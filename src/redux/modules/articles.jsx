import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Action
export const fetchArticles = createAsyncThunk("fetchArticles", async () => {
  const response = await fetch(
    "https://api.theguidon.com/interactive/wp-json/wp/v2/interactives"
  );
  return response.json();
});

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    isLoading: true,
    isError: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      console.error(action.payload);
      state.isError = true;
    });
  },
});

export default articlesSlice.reducer;
