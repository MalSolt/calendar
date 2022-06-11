import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import tasks from './tasks'

const persistConfig = {
  key: 'tasks',
  storage,
  whitelist: ['tasks'],
}

const reducers = combineReducers({
  tasks,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
