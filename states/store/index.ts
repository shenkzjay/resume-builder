import UpdateTextReducer from "../reducers/slice/textUpdateSlice";

import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";

import { persistReducer, persistStore } from "redux-persist";

import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, UpdateTextReducer);

export const store = configureStore({
  reducer: {
    updateTextName: persistedReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
