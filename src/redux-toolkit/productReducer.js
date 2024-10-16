import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await res.json();
    console.log(data);
    return data;
  }
);

// export const getCategories = createAsyncThunk(
//   "productsSlice/getCategories",
//   async () => {
//     const res = await fetch("https://api.escuelajs.co/api/v1/categories");
//     const data = await res.json();
//     console.log(data);
//     return data;
//   }
// );

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState: [{ id: 1, title: "product-1" }],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log(action);
      return action.payload;
    });
    // .addCase(getCategories.fulfilled, (state, action) => {
    //   return action.payload;
    // });
  },
});

export const { addProduct } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
