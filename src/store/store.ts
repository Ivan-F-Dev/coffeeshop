import {combineReducers, configureStore} from '@reduxjs/toolkit'
import emulationSlice from "./slices/emulationSlice";

const rootReducer = combineReducers({
    emulationSlice: emulationSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]