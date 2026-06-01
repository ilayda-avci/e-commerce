import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api/api";

export const loginUser = createAsyncThunk(
  "client/login",
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    try {
      const res = await api.post("/login", { email, password });
      if (rememberMe) {
        localStorage.setItem("token", res.data.token);
      }
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message ?? "Login failed");
    }
  }
);

export const verifyToken = createAsyncThunk(
  "client/verifyToken",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return rejectWithValue("No token");

      api.defaults.headers.common["Authorization"] = token;
      const res = await api.get("/verify");

      // Token'ı yenile
      localStorage.setItem("token", res.data.token);
      api.defaults.headers.common["Authorization"] = res.data.token;

      return res.data;
    } catch (err) {
      localStorage.removeItem("token");
      delete api.defaults.headers.common["Authorization"];
      return rejectWithValue(err?.response?.data?.message ?? "Token invalid");
    }
  }
);

const clientSlice = createSlice({
  name: "client",
  initialState: {
    user: null,
    token: localStorage.getItem("token") ?? null,
    loading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      delete api.defaults.headers.common["Authorization"];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Login failed";
      })
      .addCase(verifyToken.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(verifyToken.rejected, (state) => {
        state.user = null;
        state.token = null;
      });
  },
});

export const { logout } = clientSlice.actions;
export default clientSlice.reducer;