import { createSlice } from '@reduxjs/toolkit';

const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    images: [],
    activeImage: {},
    adImages: [],
  },
  reducers: {
    setImages(state, action) {
      state.images = action.payload;
    },
    setActiveImage(state, action) {
      state.activeImage = action.payload;
    },
    setAdImages(state, action) {
      state.adImages = action.payload;
    },
  },
});

export const { setImages, setActiveImage, setAdImages } = imagesSlice.actions;

export default imagesSlice.reducer;
