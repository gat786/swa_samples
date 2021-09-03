import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const updateInitial = createAsyncThunk(
  'demo/updateInitial',
  async (payload: any, thunkApi) => {
    // Do some asynchronously handled code here
    if (true) {
      // if the call was successfull return the value as you would like to
      // forward to slice
      setTimeout(() => true, 5000);
    } else {
      // if the call was unsuccessful reject the result stating the reason
      thunkApi.rejectWithValue('rejection reason');
      throw new Error('error reason');
    }
  }
);

/**
 * This slice is created to give you an idea of how to create one.
 * any information which you want to store in redux should be inside a slice
 * combination of different slices make up an application
 */
const demoSlice = createSlice({
  /**
   * name of the slice is what will be shown in the reduxjs toolkit
   * while testing on your browser. if you don't have it installed get it here
   * https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
   */
  name: "demoSlice",
  /**
   * this is how initially your slice will look like. initialise every variable here so that
   * you can update it later in actions.
   */
  initialState: {
    initalVariable: 1,
  },
  /**
   * reducers are actions with which you can change redux state.
   * as redux state is immutable to any other function outside reducers
   * also it is a good idea to keep all the changes in one file
   */
  reducers: {},
  /**
   * These reducers are called typically when an asynchronous thunk gets completed
   * these are called so that redux state can be changed when the data is received
   */
  extraReducers: {},
});

export default demoSlice.reducer;
