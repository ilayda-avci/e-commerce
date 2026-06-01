import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api/api";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (params = {}, { rejectWithValue }) => {
    try {
      const res = await api.get("/products", { params });
      const data = res.data;
      if (data && Array.isArray(data.products)) {
        return { total: data.total, products: data.products };
      }
      if (Array.isArray(data)) {
        return { total: data.length, products: data };
      }
      return { total: 0, products: [] };
    } catch (err) {
      return rejectWithValue(err?.message ?? String(err));
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    categories: [],
    productList: [],
    total: 0,
    limit: 25,
    offset: 0,
    filter: "",
    fetchState: "NOT_FETCHED",
  },
  reducers: {
    setCategories(state, action) { state.categories = action.payload; },
    setProductList(state, action) { state.productList = action.payload; },
    setTotal(state, action) { state.total = action.payload; },
    setFetchState(state, action) { state.fetchState = action.payload; },
    setLimit(state, action) { state.limit = action.payload; },
    setOffset(state, action) { state.offset = action.payload; },
    setFilter(state, action) { state.filter = action.payload; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.fetchState = "FETCHING";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.fetchState = "FETCHED";
        state.productList = action.payload.products;
        state.total = action.payload.total;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.fetchState = "FAILED";
      });
  },
});

export const {
  setCategories,
  setProductList,
  setTotal,
  setFetchState,
  setLimit,
  setOffset,
  setFilter,
} = productSlice.actions;

export default productSlice.reducer;