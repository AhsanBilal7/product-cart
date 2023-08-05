import { useReducer } from "react";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// We donot do the API call inside the Reducer
// Reducer are called synchronously, whether the API call is asynchronous
// We will use middle ware like Thunks functionn to make API calls

export const STATUS = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  SUCCEEDED: "succeeded",
  ERROR: "error",
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
  reducers: {
    // setState(state,action){
    // state.data = action.payload
    // },
    // setStatus(state,action){
    // state.status = action.payload
    // }
  },
  extraReducers: (builder) => {
    builder
    // It automatically fetch the data and statuses returnedd from API from the fetchProductData function
      .addCase(fetchProductData.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(fetchProductData.rejected, (state , action) =>{
        state.status = STATUS.ERROR;
      })
  },
});

export default productSlice.reducer;
export const { setState, setStatus } = productSlice.actions;

// Thunk function This is the basic Thnunk Function. In which we do Async functions
// export function fetchProductData() {
//     return  async function fetchProductDataAsync (dispatch) {
//      dispatch(setStatus(STATUS.LOADING));
//     try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         const data = await response.json();
//         const jsonString = JSON.stringify(data);
//         console.log(data);
//         dispatch(setState(data));
//         dispatch(setStatus(STATUS.SUCCEEDED));
//     } catch (error) {
//         // Handle any errors here, e.g., logging, error reporting, etc.
//         dispatch(setStatus(STATUS.ERROR));
//         // throw new Error('Failed to fetch data');
//     }
// }
// }

// This Thunk provided by the Redux Toolkit

export const fetchProductData = createAsyncThunk(
  "products/fetchProductDataAsync",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    const jsonString = JSON.stringify(data);
    console.log("This is the Create-Async-Thunk", data);

    return data;
  }
);
