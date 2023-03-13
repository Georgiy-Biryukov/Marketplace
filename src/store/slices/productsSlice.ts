import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { mocData } from "helpers/mocData";

export interface Iproduct {
  id: number;
  name: string;
  price: number;
  brand: string;
  discription: string;
  src: string;
}

const initialState = {
  electronics: [...mocData],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByBrand: (state, action: PayloadAction<string[]>) => {
      action.payload && action.payload.length > 0
        ? (state.electronics = initialState.electronics.filter((elem) =>
            action.payload.includes(elem.brand)
          ))
        : (state.electronics = initialState.electronics);
    },

    filterByPrice: (state, action: PayloadAction<number[]>) => {
      state.electronics = state.electronics.filter((elem) => {
        return (
          elem.price > action.payload[0] &&
          elem.price < action.payload[1] &&
          elem
        );
      });
    },

    sortByAscending: (state) => {
      state.electronics = state.electronics.sort(function (min, max) {
        return min.price - max.price;
      });
    },

    sortByDescending: (state) => {
      state.electronics = state.electronics.sort(function (min, max) {
        return max.price - min.price;
      });
    },
  },
});

export const {
  filterByBrand,
  filterByPrice,
  sortByAscending,
  sortByDescending,
} = productsSlice.actions;

export default productsSlice.reducer;
