import { useNavigate, useParams } from 'react-router-dom';
import {
  StyledArtic__Content,
  StyledArticle__Author,
  StyledArticle__Block,
  StyledArticle__BtnBlock,
  StyledArticle__BtnRedact,
  StyledArticle__BtnRemove,
  StyledArticle__City,
  StyledArticle__Date,
  StyledArticle__FillImg,
  StyledArticle__Img,
  StyledArticle__ImgBar,
  StyledArticle__ImgBarDiv,
  StyledArticle__ImgBarMob,
  StyledArticle__Info,
  StyledArticle__Left,
  StyledArticle__Link,
  StyledArticle__Price,
  StyledArticle__Right,
  StyledArticle__Title,
  StyledAuthor__About,
  StyledAuthor__Cont,
  StyledAuthor__Img,
  StyledAuthor__Name,
  StyledImgBarMob__Circle,
  StyledMain,
  StyledMain__Artic,
  StyledMain__Container,
  StyledMain__Content,
  StyledMain__Menu,
  StyledMain__Text,
  StyledMain__Title,
  StyledMenu__BtnSearch,
  StyledMenu__Form,
  StyledMenu__LogoImg,
  StyledMenu__LogoLink,
} from './styles';
import { Ad_Image } from '../../../types/types';
import {
  useDeleteAdMutation,
  useLazyGetCommentsByAdIdQuery,
  useLazyGetMyAdsQuery,
} from '../../../store/middlewares/ads';
import { useEffect } from 'react';
import {
  setAdComments,
  setEditAdForm,
  setPhotoWasAdded,
  setUserAds,
} from '../../../store/slices/adsSlice';
import { setActiveImage } from '../../../store/slices/imagesSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
export default function MyAdv() {
  const params = useParams();
  const userAds = useAppSelector((state) => state.ads.userAds);
  const adComments = useAppSelector((state) => state.ads.adComments);
  const access_token = useAppSelector((state) => state.auth.access_token);
  const editAdForm = useAppSelector((state) => state.ads.editAdForm);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [getMyAds, { data: updatedMyAds, isSuccess: updatedMyAdsObtained }] =
    useLazyGetMyAdsQuery();
  const [getAllComments, { data: commentsQuery, isSuccess: commentsObtained }] =
    useLazyGetCommentsByAdIdQuery();
  const [deleteAdById, { isSuccess: adDeleted }] = useDeleteAdMutation();
  const adImages = useAppSelector((state) => state.images.adImages);
  const activeImage = useAppSelector((state) => state.images.activeImage);
  const handleEdition = () => {
    dispatch(
      setEditAdForm({
        ...editAdForm,
        title: userAds.filter(
          (elem) => elem.id.toString() === params?.id?.toString(),
        )[0].title,
        description: userAds.filter(
          (elem) => elem.id.toString() === params?.id?.toString(),
        )[0].description,
        price: userAds.filter(
          (elem) => elem.id.toString() === params?.id?.toString(),
        )[0].price,
        imgs: userAds.filter(
          (elem) => elem.id.toString() === params?.id?.toString(),
        )[0].images,
      }),
    );
    dispatch(setPhotoWasAdded(false));
    navigate(`/profile/myadv/${params.id}/edit`);
  };
  const obtainComments = async () => {
    const id = params.id;
    await getAllComments({ id }).unwrap();
  };
  const handleDeletion = async () => {
    const id = params.id;
    await deleteAdById({ id, access_token }).unwrap();
  };
  const handleRefresh = async () => {
    await getMyAds({ access_token });
  };
  useEffect(() => {
    if (!updatedMyAdsObtained) return;
    dispatch(setUserAds(updatedMyAds));
    navigate(-1);
  }, [updatedMyAdsObtained]);
  useEffect(() => {
    if (!adDeleted) return;
    handleRefresh();
  }, [adDeleted]);
  useEffect(() => {
    if (!commentsObtained) return;
    dispatch(setAdComments(commentsQuery));
  }, [commentsObtained]);
  useEffect(() => {
    obtainComments();
  }, []);
  const handleChangeFocusPic = (picture: Ad_Image) => {
    dispatch(setActiveImage(picture));
  };
  return (
    <StyledMain>
      <StyledMain__Container>
        <StyledMain__Menu>
          <StyledMenu__LogoLink to={'/profile/main'}>
            <StyledMenu__LogoImg src="../../img/logo.png" alt="logo" />
          </StyledMenu__LogoLink>
          <StyledMenu__Form onSubmit={(e) => e.preventDefault()}>
            <StyledMenu__BtnSearch
              id="btnGoBack"
              onClick={() => navigate('/profile/main')}
            >
              Вернуться на&nbsp;главную
            </StyledMenu__BtnSearch>
          </StyledMenu__Form>
        </StyledMain__Menu>
      </StyledMain__Container>

      <StyledMain__Artic>
        <StyledArtic__Content>
          <StyledArticle__Left>
            <StyledArticle__FillImg>
              {activeImage?.url && (
                <StyledArticle__Img>
                  <img
                    src={`http://127.0.0.1:8090/${activeImage.url}`}
                    alt=""
                  />
                </StyledArticle__Img>
              )}
              <StyledArticle__ImgBar>
                {adImages.map((elem: Ad_Image) => {
                  return (
                    <StyledArticle__ImgBarDiv
                      onClick={() => {
                        handleChangeFocusPic(elem);
                      }}
                      key={elem.id}
                    >
                      <img src={`http://127.0.0.1:8090/${elem.url}`} alt="" />
                    </StyledArticle__ImgBarDiv>
                  );
                })}
              </StyledArticle__ImgBar>
              <StyledArticle__ImgBarMob>
                <StyledImgBarMob__Circle
                  isactive={'true'}
                ></StyledImgBarMob__Circle>
                <StyledImgBarMob__Circle></StyledImgBarMob__Circle>
                <StyledImgBarMob__Circle></StyledImgBarMob__Circle>
                <StyledImgBarMob__Circle></StyledImgBarMob__Circle>
                <StyledImgBarMob__Circle></StyledImgBarMob__Circle>
              </StyledArticle__ImgBarMob>
            </StyledArticle__FillImg>
          </StyledArticle__Left>
          <StyledArticle__Right>
            <StyledArticle__Block>
              <StyledArticle__Title>
                {
                  userAds.filter(
                    (elem) => elem.id.toString() === params?.id?.toString(),
                  )[0]?.title
                }
              </StyledArticle__Title>
              <StyledArticle__Info>
                <StyledArticle__Date>
                  Создано{' '}
                  {userAds
                    .filter(
                      (elem) => elem.id.toString() === params?.id?.toString(),
                    )[0]
                    ?.created_on.slice(0, 10)}{' '}
                  в{' '}
                  {userAds
                    .filter(
                      (elem) => elem.id.toString() === params?.id?.toString(),
                    )[0]
                    ?.created_on.slice(11, 16)}
                </StyledArticle__Date>
                <StyledArticle__City>
                  {
                    userAds.filter(
                      (elem) => elem.id.toString() === params?.id?.toString(),
                    )[0]?.user.city
                  }
                </StyledArticle__City>
                <StyledArticle__Link
                  to={'/profile/seller/adv/' + params.id + '/comments'}
                >
                  {adComments.length
                    ? `Отзывов: ${adComments.length}`
                    : 'Нет отзывов'}
                </StyledArticle__Link>
              </StyledArticle__Info>
              <StyledArticle__Price>
                {
                  userAds.filter(
                    (elem) => elem.id.toString() === params?.id?.toString(),
                  )[0]?.price
                }{' '}
                ₽
              </StyledArticle__Price>
              <StyledArticle__BtnBlock>
                <StyledArticle__BtnRedact onClick={handleEdition}>
                  Редактировать
                </StyledArticle__BtnRedact>
                <StyledArticle__BtnRemove
                  onClick={() => {
                    handleDeletion();
                  }}
                >
                  Снять с публикации
                </StyledArticle__BtnRemove>
              </StyledArticle__BtnBlock>

              <StyledArticle__Author>
                <StyledAuthor__Img>
                  <img src="" alt="" />
                </StyledAuthor__Img>
                <StyledAuthor__Cont>
                  <StyledAuthor__Name onClick={() => navigate('/profile')}>
                    {
                      userAds.filter(
                        (elem) => elem.id.toString() === params?.id?.toString(),
                      )[0]?.user.name
                    }
                  </StyledAuthor__Name>
                  <StyledAuthor__About>
                    Продает товары с{' '}
                    {userAds
                      .filter(
                        (elem) => elem.id.toString() === params?.id?.toString(),
                      )[0]
                      ?.user.sells_from.replaceAll('-', ':')}
                  </StyledAuthor__About>
                </StyledAuthor__Cont>
              </StyledArticle__Author>
            </StyledArticle__Block>
          </StyledArticle__Right>
        </StyledArtic__Content>
      </StyledMain__Artic>

      <StyledMain__Container>
        <StyledMain__Title>Описание товара</StyledMain__Title>
        <StyledMain__Content>
          <StyledMain__Text>
            {
              userAds.filter(
                (elem) => elem.id.toString() === params?.id?.toString(),
              )[0]?.description
            }
          </StyledMain__Text>
        </StyledMain__Content>
      </StyledMain__Container>
    </StyledMain>
  );
}
