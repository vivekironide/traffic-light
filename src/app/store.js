import {configureStore}  from "@reduxjs/toolkit";
import starwarsReducer from "./starwars";

export default configureStore({
  reducer: {
    starwars: starwarsReducer
  }
})