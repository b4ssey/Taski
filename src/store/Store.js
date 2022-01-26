import { configureStore } from "@reduxjs/toolkit";
import { AsyncStorage } from "react-native";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./userSlice";
import userReducer from "./ducks/users";

const persistConfig = { key: "root", storage: AsyncStorage };

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const createdStore = createStore(persistedReducer);
const createdPersistor = persistStore(createdStore);

export const store = createdStore;
export const persistor = createdPersistor;

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
