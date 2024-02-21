import {
  StyledWrapper,
  StyledContainerBg,
  StyledFormNewArt__Area,
  StyledFormNewArt__BarImg,
  StyledFormNewArt__Block,
  StyledFormNewArt__BtnPub,
  StyledFormNewArt__Img,
  StyledFormNewArt__ImgCover,
  StyledFormNewArt__Input,
  StyledFormNewArt__InputPriceCover,
  StyledFormNewArt__P,
  StyledModal__Block,
  StyledModal__BtnClose,
  StyledModal__BtnCloseLine,
  StyledModal__Content,
  StyledModal__FormNewArt,
  StyledModal__Title,
  StyledFormNewArt__BlockPrice,
  StyledFormNewArt__InputPrice,
  StyledFormImageFileInput,
} from './styles';
import {
  Ad,
  setEditAdForm,
  setPhotoWasAdded,
  setUserAds,
} from '../../../store/slices/adsSlice';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useUpdateCurrentAdMutation,
  useLazyGetMyAdsQuery,
  useAddAdPictureMutation,
  useDeleteAdPictureMutation,
} from '../../../store/middlewares/ads';
import { Fragment, useEffect, useRef } from 'react';
import { setActiveImage, setAdImages } from '../../../store/slices/imagesSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
export default function EditAd() {
  const params = useParams();
  const firstInput = useRef<HTMLInputElement | null>(null);
  const secondInput = useRef<HTMLInputElement | null>(null);
  const thirdInput = useRef<HTMLInputElement | null>(null);
  const fourthInput = useRef<HTMLInputElement | null>(null);
  const fifthInput = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const adImages = useAppSelector((state) => state.images.adImages);
  const access_token = useAppSelector((state) => state.auth.access_token);
  const editAdForm = useAppSelector((state) => state.ads.editAdForm);
  const userAds = useAppSelector((state) => state.ads.userAds);
  const photoWasAdded = useAppSelector((state) => state.ads.photoWasAdded);

  const [updateCurrentAd, { isSuccess: isUpdated, data: updatedAd = {} }] =
    useUpdateCurrentAdMutation();

  const [addAdPicture, { isSuccess: isPictureAdded, data: newAdData }] =
    useAddAdPictureMutation();

  const [
    getMyAds,
    { data: updatedMyAds = [], isSuccess: updatedMyAdsObtained },
  ] = useLazyGetMyAdsQuery();

  const [deletePicture] = useDeleteAdPictureMutation();

  const disabledToText =
    editAdForm.title ===
      userAds.filter((elem) => elem.id.toString() === params?.id?.toString())[0]
        .title &&
    editAdForm.description ===
      userAds.filter((elem) => elem.id.toString() === params?.id?.toString())[0]
        .description &&
    editAdForm.price ===
      userAds.filter((elem) => elem.id.toString() === params?.id?.toString())[0]
        .price;

  const handlePostPhotos = () => {
    const newArray: React.MutableRefObject<HTMLInputElement | null>[] = [
      firstInput,
      secondInput,
      thirdInput,
      fourthInput,
      fifthInput,
    ];
    const id = params.id;
    newArray.map(async (elem, index) => {
      if (!elem.current?.files) return;
      if (index < adImages.length) {
        const file_url = adImages[index].url;
        deletePicture({ id, access_token, file_url }).unwrap();
      }
      if (elem.current?.files['0']) {
        const picture = new FormData();
        picture.append('file', elem.current.files['0']);
        await addAdPicture({ picture, access_token, id })
          .unwrap()
          .then((data) => {
            dispatch(setEditAdForm({ ...editAdForm, imgs: data.images }));
          });
      }
      elem.current.value = '';
    });
  };

  const handleUpdate = async () => {
    const id = params.id;
    if (!disabledToText) {
      await updateCurrentAd({ id, editAdForm, access_token }).unwrap();
    }
    if (photoWasAdded) {
      handlePostPhotos();
    }
  };

  const refreshAds = async () => {
    await getMyAds({ access_token });
  };

  useEffect(() => {
    if (!updatedMyAdsObtained) return;
    dispatch(setUserAds(updatedMyAds));
    if (photoWasAdded) {
      const array: Ad[] = updatedMyAds.filter(
        (elem: Ad) => elem.id.toString() === params?.id?.toString(),
      )[0]?.images;
      dispatch(setPhotoWasAdded(false));
      dispatch(setAdImages(array));
      dispatch(setActiveImage(array[0]));
    }
  }, [JSON.stringify(updatedMyAds)]);

  useEffect(() => {
    if (!isUpdated) return;
    refreshAds();
  }, [JSON.stringify(updatedAd)]);

  useEffect(() => {
    if (!isPictureAdded) return;
    refreshAds();
  }, [JSON.stringify(newAdData)]);

  const setPicture = (
    fileInput: React.MutableRefObject<HTMLInputElement | null>,
  ) => {
    fileInput.current?.click();
  };

  const handlePicUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
    picIndex: number,
  ) => {
    if (!event.target.files) return;
    const file = event.target.files['0'];
    const reader = new FileReader();
    reader.onload = (e) => {
      const newArray = new Array(5);
      for (let i = 0; i < newArray.length; i++) {
        if (!editAdForm.imgs[i]?.url) {
          newArray[i] = { url: '' };
        } else {
          newArray[i] = { url: editAdForm.imgs[i].url };
        }
      }
      newArray[picIndex] = { url: e.target?.result };
      dispatch(
        setEditAdForm({
          ...editAdForm,
          imgs: newArray,
        }),
      );
      dispatch(setPhotoWasAdded(true));
    };
    reader.readAsDataURL(file);
  };

  return (
    <StyledWrapper>
      <StyledContainerBg>
        <StyledModal__Block>
          <StyledModal__Content>
            <StyledModal__Title>Редактировать объявление</StyledModal__Title>
            <StyledModal__BtnClose
              onClick={() => {
                navigate(-1);
              }}
            >
              <StyledModal__BtnCloseLine></StyledModal__BtnCloseLine>
            </StyledModal__BtnClose>
            <StyledModal__FormNewArt
              id="formNewArt"
              onSubmit={(e) => e.preventDefault()}
            >
              <StyledFormNewArt__Block>
                <label htmlFor="name">Название</label>
                <StyledFormNewArt__Input
                  type="text"
                  name="name"
                  id="formName"
                  placeholder="Введите название"
                  value={editAdForm.title}
                  onChange={(e) => {
                    dispatch(
                      setEditAdForm({ ...editAdForm, title: e.target.value }),
                    );
                  }}
                />
              </StyledFormNewArt__Block>
              <StyledFormNewArt__Block>
                <label htmlFor="text">Описание</label>
                <StyledFormNewArt__Area
                  name="text"
                  id="formArea"
                  rows={10}
                  placeholder="Введите описание"
                  value={editAdForm.description}
                  onChange={(e) => {
                    dispatch(
                      setEditAdForm({
                        ...editAdForm,
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
                  {[
                    firstInput,
                    secondInput,
                    thirdInput,
                    fourthInput,
                    fifthInput,
                  ].map((elem, index) => {
                    return (
                      <Fragment key={index}>
                        <StyledFormNewArt__Img onClick={() => setPicture(elem)}>
                          <img
                            src={
                              !!elem.current?.value
                                ? editAdForm.imgs[index]?.url
                                : editAdForm.imgs[index]?.url
                                  ? 'http://127.0.0.1:8090/' +
                                    editAdForm.imgs[index]?.url
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
                <label htmlFor="price">Цена</label>
                <StyledFormNewArt__InputPrice
                  type="number"
                  name="price"
                  id="formName"
                  value={editAdForm.price.toString()}
                  onChange={(e) => {
                    dispatch(
                      setEditAdForm({
                        ...editAdForm,
                        price: Number(e.target.value),
                      }),
                    );
                  }}
                />
                <StyledFormNewArt__InputPriceCover></StyledFormNewArt__InputPriceCover>
              </StyledFormNewArt__BlockPrice>

              <StyledFormNewArt__BtnPub
                onClick={() => handleUpdate()}
                disabled={disabledToText && !photoWasAdded}
                id="btnPublish"
              >
                Сохранить
              </StyledFormNewArt__BtnPub>
            </StyledModal__FormNewArt>
          </StyledModal__Content>
        </StyledModal__Block>
      </StyledContainerBg>
    </StyledWrapper>
  );
}
