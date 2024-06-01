import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Action
export const fetchFeatured = createAsyncThunk("fetchFeatured", async () => {
  const response = await fetch(
    "https://api.theguidon.com/interactive/wp-json/api/v1/featured"
  );
  return response.json();
});

const featuredSlice = createSlice({
  name: "featured",
  initialState: {
    isLoading: true,
    isError: false,
    isReady: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFeatured.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFeatured.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isReady = true;
    });
    builder.addCase(fetchFeatured.rejected, (state, action) => {
      console.error(action.payload);
      state.isError = true;
    });
  },
});

export default featuredSlice.reducer;
