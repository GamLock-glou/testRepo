import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {IContentState, IProduct, ILine} from '../interfaces';

import {getLine, getProduct} from './contentThunks';


const initialState: IContentState = {
  line: {},
  product: {},
};

export const contentSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setLine: (state, action) => {
      state.line = action.payload;
    },
  },
  extraReducers: {
    [getLine.fulfilled.type]: (state, action: PayloadAction<ILine>) => {
      state.line = action.payload;
    },
    // [getLine.pending.type]: (state) => {
    //   // state.isLoading = true;
    // },
    // [getLine.rejected.type]: (state, action: PayloadAction<string>) => {
    //   // state.isLoading = false;
    //   // state.error = action.payload;
    // },
    [getProduct.fulfilled.type]: (state, action: PayloadAction<IProduct>) => {
      state.product = action.payload;
    },
    // [getProduct.pending.type]: (state) => {
    //   // state.isLoading = true;
    // },
    // [getProduct.rejected.type]: (state, action: PayloadAction<string>) => {
    //   // state.isLoading = false;
    //   // state.error = action.payload;
    // },
  },
});

export default contentSlice.reducer;
