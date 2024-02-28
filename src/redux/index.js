import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api';
import { loggerMiddleware } from './middlewares/logger';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  /** Порядок middleware ВАЖЕН ! */
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    api.middleware,
    loggerMiddleware
  ],
});

export default store;
