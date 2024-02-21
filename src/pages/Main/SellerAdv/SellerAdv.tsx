import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  StyledArtic__Content,
  StyledArticle__Author,
  StyledArticle__Block,
  StyledArticle__Btn,
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
  StyledMain__Text,
  StyledMain__Title,
  StyledMenu,
  StyledMenu__BtnSearch,
  StyledMenu__Form,
  StyledMenu__LogoImg,
  StyledMenu__LogoLink,
} from './styles';
import { useEffect } from 'react';
import { useGetAllUsersQuery } from '../../../store/middlewares/users';
import { setUsers } from '../../../store/slices/usersSlice';
import {
  setAdComments,
  setNumberVisibility,
} from '../../../store/slices/adsSlice';
import { useLazyGetCommentsByAdIdQuery } from '../../../store/middlewares/ads';
import { setActiveImage } from '../../../store/slices/imagesSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { Ad_Image } from '../../../types/types';
export default function SellerAdv() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const adComments = useAppSelector((state) => state.ads.adComments);
  const advVisibilityNumber = useAppSelector(
    (state) => state.ads.numberVisibility,
  );
  const activeImage = useAppSelector((state) => state.images.activeImage);
  const adImages = useAppSelector((state) => state.images.adImages);
  const [getAllComments] = useLazyGetCommentsByAdIdQuery();
  const { data: usersQuery, isSuccess: usersObtained } =
    useGetAllUsersQuery(true);
  useEffect(() => {
    if (usersObtained === false) return;
    dispatch(setUsers(usersQuery));
  }, [usersObtained]);
  useEffect(() => {
    dispatch(setNumberVisibility(false));
  }, [location]);
  const getCommentsCollection = async () => {
    const id = params.id;
    await getAllComments({ id })
      .unwrap()
      .then((data) => dispatch(setAdComments(data)));
  };
  useEffect(() => {
    if (!usersObtained) return;
    getCommentsCollection();
  }, [usersObtained]);
  const adsArray = useAppSelector((state) => state.ads.ads);
  const isAuthorized = useAppSelector((state) => state.auth.isAuthorized);
  const handleChangeFocusPic = (picture: Ad_Image) => {
    dispatch(setActiveImage(picture));
  };
  return (
    <StyledMain>
      <StyledMain__Container>
        <StyledMenu>
          <StyledMenu__LogoLink to={isAuthorized ? '/profile/main' : '/'}>
            <StyledMenu__LogoImg
              src={
                isAuthorized ? '../../../img/logo.png' : '../../img/logo.png'
              }
              alt="logo"
            />
          </StyledMenu__LogoLink>
          <StyledMenu__Form action="#">
            <StyledMenu__BtnSearch
              id="btnGoBack"
              onClick={(e) => {
                e.preventDefault();
                navigate(isAuthorized ? '/profile/main' : '/');
              }}
            >
              Вернуться на главную
            </StyledMenu__BtnSearch>
          </StyledMenu__Form>
        </StyledMenu>
      </StyledMain__Container>

      <StyledMain__Artic>
        <StyledArtic__Content>
          <StyledArticle__Left>
            <StyledArticle__FillImg>
              {activeImage.url && (
                <StyledArticle__Img>
                  <img
                    src={`http://127.0.0.1:8090/${activeImage.url}`}
                    alt=""
                  />
                </StyledArticle__Img>
              )}
              <StyledArticle__ImgBar>
                {adImages.map((elem) => {
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
                <StyledImgBarMob__Circle
                  isactive={'false'}
                ></StyledImgBarMob__Circle>
                <StyledImgBarMob__Circle
                  isactive={'false'}
                ></StyledImgBarMob__Circle>
                <StyledImgBarMob__Circle
                  isactive={'false'}
                ></StyledImgBarMob__Circle>
                <StyledImgBarMob__Circle
                  isactive={'false'}
                ></StyledImgBarMob__Circle>
              </StyledArticle__ImgBarMob>
            </StyledArticle__FillImg>
          </StyledArticle__Left>
          <StyledArticle__Right>
            <StyledArticle__Block>
              <StyledArticle__Title>
                {
                  adsArray.filter(
                    (elem) => elem.id.toString() === params?.id?.toString(),
                  )[0].title
                }
              </StyledArticle__Title>
              <StyledArticle__Info>
                <StyledArticle__Date>
                  {`Создано 
                  ${adsArray
                    .filter(
                      (elem) => elem.id.toString() === params?.id?.toString(),
                    )[0]
                    .created_on.slice(0, 10)
                    .replaceAll('-', ':')} в ${adsArray
                    .filter(
                      (elem) => elem.id.toString() === params?.id?.toString(),
                    )[0]
                    .created_on.slice(11, 16)}`}
                </StyledArticle__Date>
                <StyledArticle__City>
                  {
                    adsArray.filter(
                      (elem) => elem.id.toString() === params?.id?.toString(),
                    )[0].user.city
                  }
                </StyledArticle__City>
                <StyledArticle__Link
                  to={
                    isAuthorized
                      ? '/profile/seller/adv/' + params.id + '/comments'
                      : '/seller/adv/' + params.id + '/comments'
                  }
                >
                  {adComments.length
                    ? `Отзывов: ${adComments.length}`
                    : 'Нет отзывов'}
                </StyledArticle__Link>
              </StyledArticle__Info>
              <StyledArticle__Price>{`${
                adsArray.filter(
                  (elem) => elem.id.toString() === params?.id?.toString(),
                )[0].price
              } ₽`}</StyledArticle__Price>
              <StyledArticle__Btn
                onClick={(e) => {
                  dispatch(setNumberVisibility(!advVisibilityNumber));
                }}
              >
                {advVisibilityNumber ? (
                  <div>
                    <div>Спрятать телефон</div>
                    <div>
                      {
                        adsArray.filter(
                          (elem) =>
                            elem.id.toString() === params?.id?.toString(),
                        )[0].user.phone
                      }
                    </div>
                  </div>
                ) : (
                  <div>
                    <div>Показать телефон</div>
                    <div>8 905-ХХХ-ХХ-ХХ</div>
                  </div>
                )}
              </StyledArticle__Btn>
              <StyledArticle__Author>
                <StyledAuthor__Img>
                  <img
                    src={
                      adsArray.filter(
                        (elem) => elem.id.toString() === params?.id?.toString(),
                      )[0].user.avatar
                        ? `http://127.0.0.1:8090/${
                            adsArray.filter(
                              (elem) =>
                                elem.id.toString() === params?.id?.toString(),
                            )[0].user.avatar
                          }`
                        : isAuthorized
                          ? '../../../img/mock_ava.jpg'
                          : '../../img/mock_ava.jpg'
                    }
                    alt=""
                  />
                </StyledAuthor__Img>
                <StyledAuthor__Cont>
                  <StyledAuthor__Name
                    onClick={(e) => {
                      navigate(
                        isAuthorized
                          ? '/profile/seller/' +
                              adsArray.filter(
                                (elem) =>
                                  elem.id.toString() === params?.id?.toString(),
                              )[0].user.id
                          : '/seller/' +
                              adsArray.filter(
                                (elem) =>
                                  elem.id.toString() === params?.id?.toString(),
                              )[0].user.id,
                      );
                    }}
                  >
                    {
                      adsArray.filter(
                        (elem) => elem.id.toString() === params?.id?.toString(),
                      )[0].user.name
                    }
                  </StyledAuthor__Name>
                  <StyledAuthor__About>
                    {`Продает товары с ${adsArray
                      .filter(
                        (elem) => elem.id.toString() === params?.id?.toString(),
                      )[0]
                      .user.sells_from.replaceAll('-', ':')}`}
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
              adsArray.filter(
                (elem) => elem.id.toString() === params?.id?.toString(),
              )[0].description
            }
          </StyledMain__Text>
        </StyledMain__Content>
      </StyledMain__Container>
    </StyledMain>
  );
}
