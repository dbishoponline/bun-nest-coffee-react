import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface ApiInfo {
  name: string;
  version: string;
  description: string;
}

interface ApiState {
  info: ApiInfo | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ApiState = {
  info: null,
  status: 'idle',
  error: null,
};

export const fetchApiInfo = createAsyncThunk(
  'api/fetchInfo',
  async (_, { rejectWithValue }) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      const response = await fetch(`${apiUrl}/api/info`);
      if (!response.ok) {
        throw new Error('Failed to fetch API info');
      }
      return response.json();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setApiInfo: (state, action: PayloadAction<ApiInfo>) => {
      state.info = action.payload;
      state.status = 'succeeded';
    },
    clearApiInfo: (state) => {
      state.info = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiInfo.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchApiInfo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.info = action.payload;
      })
      .addCase(fetchApiInfo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { setApiInfo, clearApiInfo } = apiSlice.actions;

export const selectApiInfo = (state: RootState) => state.api.info;
export const selectApiStatus = (state: RootState) => state.api.status;
export const selectApiError = (state: RootState) => state.api.error;

export default apiSlice.reducer;
