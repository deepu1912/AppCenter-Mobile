import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const deleteApplication = createAsyncThunk(
  'deleteApplication',
  async ({accessToken, appId}) => {
    try {
      console.log(accessToken, appId);

      const response = await fetch(
        `http://localhost:8000/api/app/deleteApplication`,
        {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          credentials: 'include',
          //   body: JSON.stringify({
          //     build,
          //     version,
          //     releaseNote,
          //     applicationId: appId,
          //   }),
        },
      );
      const responseData = await response.json();
      console.log('rd', responseData);
      return responseData;
    } catch (error) {
      console.log('Error in login user data', error);
      throw error;
    }
  },
);

const deleteAppSlice = createSlice({
  name: 'deleteApp',
  initialState: {
    isLoading: false,
    data: null,
    items: [],
    isError: false,
  },

  extraReducers: builder => {
    builder.addCase(deleteApplication.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(deleteApplication.fulfilled, (state, action) => {
      console.log('action', action); //{type: 'postLoginData/fulfilled', payload: {…}, meta: {…}}
      state.isLoading = false;
      state.items = action.payload.data;
      state.data = action.payload;
      state.isError = false;
      console.log('action', action); //{type: 'postLoginData/fulfilled', payload: {…}, meta: {…}}
    });
    builder.addCase(deleteApplication.rejected, state => {
      state.isError = true;
    });
  },
});

export default deleteAppSlice.reducer;