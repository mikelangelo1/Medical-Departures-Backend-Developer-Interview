import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import userReducer from "./reducers/userSlice";
import { userApi } from "./rtk-query/userApi";

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  //
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(userApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
