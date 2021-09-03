import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUserData = createAsyncThunk(
  "AuthSlice/getUserData",
  async (args, thunkApi) => {
    const userData = await fetch("/.auth/me");
    return userData.json();
  }
);

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState: {
    userData: {
      clientPrincipal: {
        userId: "",
        userRoles: [],
        identityProvider: "",
        userDetails: "",
      },
    },
    isloggedIn: false,
  },
  reducers: {},
  extraReducers: {
    [getUserData.fulfilled.type]: (state, action) => {
      // debugger;
      if (action.payload?.clientPrincipal === null) {
        state.isloggedIn = false;
      } else {
        state.isloggedIn = true;
        state.userData = action.payload;
      }
    },
  },
});

export default AuthSlice.reducer;
