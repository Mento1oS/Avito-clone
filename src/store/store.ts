import { configureStore } from '@reduxjs/toolkit';
import adsReducer from './slices/adsSlice';
import usersReducer from './slices/usersSlice';
import { adsApi } from './middlewares/ads';
import { usersApi } from './middlewares/users';
import authorizationSlice from './slices/authorizationSlice';
import { authApi } from './middlewares/auth';
import { textAdsApi } from './middlewares/textAd';
import { imagesApi } from './middlewares/images';
import imagesSlice from './slices/imagesSlice';
const store = configureStore({
  reducer: {
    ads: adsReducer,
    users: usersReducer,
    auth: authorizationSlice,
    images: imagesSlice,
    [adsApi.reducerPath]: adsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [textAdsApi.reducerPath]: textAdsApi.reducer,
    [imagesApi.reducerPath]: imagesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(adsApi.middleware)
      .concat(usersApi.middleware)
      .concat(authApi.middleware)
      .concat(textAdsApi.middleware)
      .concat(imagesApi.middleware),
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
