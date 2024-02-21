import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ad_Image } from '../../types/types';

type InitialState = {
  images?: Ad_Image[];
  activeImage: Ad_Image;
  adImages: Ad_Image[];
};

const initialState: InitialState = {
  images: [],
  activeImage: {},
  adImages: [],
};

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setImages(state, action: PayloadAction<Ad_Image[]>) {
      state.images = action.payload;
    },
    setActiveImage(state, action: PayloadAction<Ad_Image>) {
      state.activeImage = action.payload;
    },
    setAdImages(state, action: PayloadAction<Ad_Image[]>) {
      state.adImages = action.payload;
    },
  },
});

export const { setImages, setActiveImage, setAdImages } = imagesSlice.actions;

export default imagesSlice.reducer;
