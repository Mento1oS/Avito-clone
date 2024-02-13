import { createSlice } from '@reduxjs/toolkit';

const adsSlice = createSlice({
  name: 'ads',
  initialState: {
    ads: [],
    searchFilter: '',
    numberVisibility: false,
    searchField: '',
    addAdIsOpen: false,
    userAds: [],
    addAdForm: {
      title: '',
      description: '',
      price: 0,
      imgs: [],
    },
    isAddAdFormValidError: 'false',
    adComments: [],
    commentTextArea: '',
    editAdForm: {
      title: '',
      description: '',
      price: 0,
      imgs: [],
    },
    photoWasAdded: false,
    addingAdWithPhotos: false,
    addAdFiles: [],
  },
  reducers: {
    setAds(state, action) {
      state.ads = action.payload;
    },
    setSearchFilter(state, action) {
      state.searchFilter = action.payload;
    },
    setNumberVisibility(state, action) {
      state.numberVisibility = action.payload;
    },
    setSearchField(state, action) {
      state.searchField = action.payload;
    },
    setAddAdIsOpen(state, action) {
      state.addAdIsOpen = action.payload;
    },
    setUserAds(state, action) {
      state.userAds = action.payload;
    },
    setAddAdForm(state, action) {
      state.addAdForm = action.payload;
    },
    setIsAddAdFormValidError(state, action) {
      state.isAddAdFormValidError = action.payload;
    },
    setAdComments(state, action) {
      state.adComments = action.payload;
    },
    setCommentTextArea(state, action) {
      state.commentTextArea = action.payload;
    },
    setEditAdForm(state, action) {
      state.editAdForm = action.payload;
    },
    setPhotoWasAdded(state, action) {
      state.photoWasAdded = action.payload;
    },
    setAddingAdWithPhotos(state, action) {
      state.addingAdWithPhotos = action.payload;
    },
    setAddAdFiles(state, action) {
      state.addAdFiles = action.payload;
    },
  },
});

export const {
  setAds,
  setSearchFilter,
  setNumberVisibility,
  setSearchField,
  setAddAdIsOpen,
  setUserAds,
  setAddAdForm,
  setIsAddAdFormValidError,
  setAdComments,
  setCommentTextArea,
  setEditAdForm,
  setPhotoWasAdded,
  setAddingAdWithPhotos,
  setAddAdFiles,
} = adsSlice.actions;

export default adsSlice.reducer;
