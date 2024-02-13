import { useDispatch, useSelector } from 'react-redux';
import {
  StyledContainerBg,
  StyledFormNewArt__Area,
  StyledFormNewArt__BarImg,
  StyledFormNewArt__Block,
  StyledFormNewArt__BlockPrice,
  StyledFormNewArt__BtnPub,
  StyledFormNewArt__Img,
  StyledFormNewArt__ImgCover,
  StyledFormNewArt__Input,
  StyledFormNewArt__InputPrice,
  StyledFormNewArt__InputPriceCover,
  StyledFormNewArt__P,
  StyledModal__Block,
  StyledModal__BtnClose,
  StyledModal__BtnCloseLine,
  StyledModal__Content,
  StyledModal__FormNewArt,
  StyledModal__Title,
  StyledWrapper,
  StyledFormImageFileInput,
} from './styles';
import {
  setAddAdFiles,
  setAddAdForm,
  setAddAdIsOpen,
  setAddingAdWithPhotos,
  setAds,
  setIsAddAdFormValidError,
  setUserAds,
} from '../../../store/slices/adsSlice';
import { Fragment, useEffect, useRef } from 'react';
import { useAddNonImgAdMutation } from '../../../store/middlewares/textAd';
import {
  useLazyGetMyAdsQuery,
  useAddAdPictureMutation,
  useLazyGetAllAdsQuery,
} from '../../../store/middlewares/ads';
export function AddAd() {
  const dispatch = useDispatch();
  const isAddAdFormValidError = useSelector(
    (state) => state.ads.isAddAdFormValidError,
  );
  const addingAdWithPhotos = useSelector(
    (state) => state.ads.addingAdWithPhotos,
  );
  const access_token = useSelector((state) => state.auth.access_token);
  const wrapperRef = useRef();
  const closeRef = useRef();
  const firstInput = useRef(0);
  const secondInput = useRef(0);
  const thirdInput = useRef(0);
  const fourthInput = useRef(0);
  const fifthInput = useRef(0);
  const counter = useRef(0);
  const [addAdPicture, { isSuccess: isPictureAdded, data: newAdData }] =
    useAddAdPictureMutation();
  const [addNonImgAd, { data: newNonImgAd, isSuccess: addedNonImgAd }] =
    useAddNonImgAdMutation();
  const [getMyAds, { data: updatedMyAds, isSuccess: updatedMyAdsObtained }] =
    useLazyGetMyAdsQuery();
  const [getAllAds, { data: updatedAds, isSuccess: updatedAllAds }] =
    useLazyGetAllAdsQuery();
  const addAdFiles = useSelector((state) => state.ads.addAdFiles);
  const addAdForm = useSelector((state) => state.ads.addAdForm);
  const addAdIsOpen = useSelector((state) => state.ads.addAdIsOpen);
  const handlePicUpload = (event, picIndex) => {
    const file = event.target.files['0'];
    if (!!!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const newArray = new Array(5);
      const filesArray = new Array(5);
      for (let i = 0; i < newArray.length; i++) {
        if (!addAdForm.imgs[i]) {
          newArray[i] = '';
          filesArray[i] = '';
        } else {
          newArray[i] = addAdForm.imgs[i];
          filesArray[i] = addAdFiles[i];
        }
      }
      newArray[picIndex] = e.target.result;
      filesArray[picIndex] = file;
      dispatch(
        setAddAdForm({
          ...addAdForm,
          imgs: newArray,
        }),
      );
      dispatch(setAddAdFiles(filesArray));
    };
    reader.readAsDataURL(file);
  };

  const setPicture = (fileInput) => {
    fileInput.current.click();
  };
  const closeAddAd = () => {
    dispatch(setAddAdIsOpen(false));
    dispatch(setIsAddAdFormValidError('false'));
  };
  const handleUpdate = async () => {
    await getMyAds({ access_token }).unwrap();
    await getAllAds().unwrap();
  };
  const handleAddImgAdd = async () => {
    dispatch(setAddingAdWithPhotos(true));
    await addNonImgAd({ addAdForm, access_token })
      .unwrap()
      .then((data) => {
        const id = data.id;
        addAdFiles.map(async (elem, index) => {
          if (!elem) return;
          const picture = new FormData();
          picture.append(`file`, elem);
          await addAdPicture({ picture, access_token, id })
            .unwrap()
            .then((data) => counter.current++);
        });
      });
  };
  useEffect(() => {
    if (
      addingAdWithPhotos &&
      Number(counter.current) ===
        Number(addAdFiles.filter((elem) => elem).length)
    )
      dispatch(setAddingAdWithPhotos(false));
  }, [
    Number(counter.current) ===
      Number(addAdFiles.filter((elem) => elem).length),
    addingAdWithPhotos,
  ]);
  useEffect(() => {
    if (!updatedMyAdsObtained || !updatedAllAds) return;
    dispatch(setUserAds(updatedMyAds));
    dispatch(setAds(updatedAds));
    closeAddAd();
    dispatch(
      setAddAdForm({
        title: '',
        description: '',
        price: 0,
        imgs: [],
      }),
    );
    dispatch(setAddAdFiles([]));
  }, [JSON.stringify(updatedMyAds), JSON.stringify(updatedAds)]);
  useEffect(() => {
    if (!addedNonImgAd || addingAdWithPhotos) return;
    handleUpdate();
  }, [JSON.stringify(newNonImgAd), !addingAdWithPhotos]);
  const submitHandle = async (e) => {
    e.preventDefault();
    if (!addAdForm.title || !addAdForm.description || !addAdForm.price) {
      dispatch(setIsAddAdFormValidError('true'));
      return;
    }
    addAdForm.imgs.length
      ? handleAddImgAdd()
      : await addNonImgAd({ addAdForm, access_token }).unwrap();
  };

  return (
    <StyledWrapper>
      <StyledContainerBg
        ref={wrapperRef}
        onClick={(e) => {
          if (e.target !== wrapperRef.current) return;
          closeAddAd();
        }}
      >
        <StyledModal__Block>
          <StyledModal__Content>
            <StyledModal__Title>Новое объявление</StyledModal__Title>
            <StyledModal__BtnClose>
              <StyledModal__BtnCloseLine
                ref={closeRef}
                onClick={(e) => {
                  if (e.target !== closeRef.current) return;
                  closeAddAd();
                }}
              ></StyledModal__BtnCloseLine>
            </StyledModal__BtnClose>
            <StyledModal__FormNewArt
              id="formNewArt"
              onSubmit={(e) => submitHandle(e)}
            >
              <StyledFormNewArt__Block>
                <label htmlFor="name">Название</label>
                <StyledFormNewArt__Input
                  iserror={isAddAdFormValidError}
                  type="text"
                  name="name"
                  id="formName"
                  placeholder="Введите название"
                  value={addAdForm.title}
                  onChange={(e) => {
                    dispatch(
                      setAddAdForm({ ...addAdForm, title: e.target.value }),
                    );
                  }}
                />
              </StyledFormNewArt__Block>
              <StyledFormNewArt__Block>
                <label htmlFor="text">Описание</label>
                <StyledFormNewArt__Area
                  iserror={isAddAdFormValidError}
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows="10"
                  placeholder="Введите описание"
                  value={addAdForm.description}
                  onChange={(e) => {
                    dispatch(
                      setAddAdForm({
                        ...addAdForm,
                        description: e.target.value,
                      }),
                    );
                  }}
                ></StyledFormNewArt__Area>
              </StyledFormNewArt__Block>
              <StyledFormNewArt__Block>
                <StyledFormNewArt__P>
                  Фотографии товара<span>не более 5 фотографий</span>
                </StyledFormNewArt__P>
                <StyledFormNewArt__BarImg>
                  {[]
                    .concat(firstInput)
                    .concat(secondInput)
                    .concat(thirdInput)
                    .concat(fourthInput)
                    .concat(fifthInput)
                    .map((elem, index) => {
                      return (
                        <Fragment key={index}>
                          <StyledFormNewArt__Img
                            onClick={() => setPicture(elem)}
                          >
                            <img
                              src={
                                addAdForm.imgs[index]
                                  ? addAdForm.imgs[index]
                                  : ''
                              }
                              alt=""
                            />
                            <StyledFormNewArt__ImgCover></StyledFormNewArt__ImgCover>
                          </StyledFormNewArt__Img>
                          <StyledFormImageFileInput
                            onChange={(e) => handlePicUpload(e, index)}
                            ref={elem}
                            type="file"
                          />
                        </Fragment>
                      );
                    })}
                </StyledFormNewArt__BarImg>
              </StyledFormNewArt__Block>
              <StyledFormNewArt__BlockPrice>
                <label htmlFor="price">Цена, ₽</label>
                <StyledFormNewArt__InputPrice
                  iserror={isAddAdFormValidError}
                  type="number"
                  name="price"
                  id="formName"
                  value={addAdForm.price}
                  onChange={(e) => {
                    dispatch(
                      setAddAdForm({ ...addAdForm, price: e.target.value }),
                    );
                  }}
                />
                <StyledFormNewArt__InputPriceCover></StyledFormNewArt__InputPriceCover>
              </StyledFormNewArt__BlockPrice>
              <StyledFormNewArt__BtnPub id="btnPublish">
                Опубликовать
              </StyledFormNewArt__BtnPub>
            </StyledModal__FormNewArt>
          </StyledModal__Content>
        </StyledModal__Block>
      </StyledContainerBg>
    </StyledWrapper>
  );
}
