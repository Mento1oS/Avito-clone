import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Image, User, TrueFalse, Comment } from '../../types/types';

export type Ad = {
  title: string;
  description: string;
  price: number;
  id: number;
  images: Image[];
  user_id: number;
  created_on: string;
  user: User;
};

type AdForm = {
  title: string;
  description: string;
  price: number;
  imgs: Image[];
};

type InitialState = {
  ads: Ad[];
  searchFilter: string;
  numberVisibility: boolean;
  searchField: string;
  addAdIsOpen: boolean;
  userAds: Ad[];
  addAdForm: AdForm;
  isAddAdFormValidError: TrueFalse;
  adComments: Comment[];
  commentTextArea: string;
  editAdForm: AdForm;
  photoWasAdded: boolean;
  addingAdWithPhotos: boolean;
  addAdFiles: File[];
};

const initialState: InitialState = {
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
};
const adsSlice = createSlice({
  name: 'ads',
  initialState,
  reducers: {
    setAds(state, action: PayloadAction<Ad[]>) {
      state.ads = action.payload;
    },
    setSearchFilter(state, action: PayloadAction<string>) {
      state.searchFilter = action.payload;
    },
    setNumberVisibility(state, action: PayloadAction<boolean>) {
      state.numberVisibility = action.payload;
    },
    setSearchField(state, action: PayloadAction<string>) {
      state.searchField = action.payload;
    },
    setAddAdIsOpen(state, action: PayloadAction<boolean>) {
      state.addAdIsOpen = action.payload;
    },
    setUserAds(state, action: PayloadAction<Ad[]>) {
      state.userAds = action.payload;
    },
    setAddAdForm(state, action: PayloadAction<AdForm>) {
      state.addAdForm = action.payload;
    },
    setIsAddAdFormValidError(state, action: PayloadAction<TrueFalse>) {
      state.isAddAdFormValidError = action.payload;
    },
    setAdComments(state, action: PayloadAction<Comment[]>) {
      state.adComments = action.payload;
    },
    setCommentTextArea(state, action: PayloadAction<string>) {
      state.commentTextArea = action.payload;
    },
    setEditAdForm(state, action: PayloadAction<AdForm>) {
      state.editAdForm = action.payload;
    },
    setPhotoWasAdded(state, action: PayloadAction<boolean>) {
      state.photoWasAdded = action.payload;
    },
    setAddingAdWithPhotos(state, action: PayloadAction<boolean>) {
      state.addingAdWithPhotos = action.payload;
    },
    setAddAdFiles(state, action: PayloadAction<File[]>) {
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
