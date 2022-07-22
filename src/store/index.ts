import { configureStore } from "@reduxjs/toolkit";
import { createMiddleware } from "redux-api-middleware";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";

const preloadedState = {};

const sagaMiddleware = createSagaMiddleware();
const apiMiddleware = createMiddleware();
const middleware = [apiMiddleware, sagaMiddleware];

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  preloadedState,
  reducer: rootReducer(),
  middleware,
});

export default store;
