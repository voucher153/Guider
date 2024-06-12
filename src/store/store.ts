import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ServicesSlice from "./reducers/toolSlice/ServicesSlice";
import { api } from "./api/api";


const rootReducers = combineReducers({
    services: ServicesSlice,
    [api.reducerPath]: api.reducer
})

export const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch