import {
  StyledCards,
  StyledMain__CenterBlock,
  StyledMain__Container,
  StyledMain__Content,
  StyledMain__H2,
  StyledMain__Menu,
  StyledMain__ProfileSell,
  StyledMain__Title,
  StyledMenu__Btn,
  StyledMenu__Form,
  StyledMenu__LogoImg,
  StyledMenu__LogoLink,
  StyledProfileSell__Content,
  StyledProfileSell__Seller,
  StyledSeller__Btn,
  StyledSeller__City,
  StyledSeller__Img,
  StyledSeller__ImgMob,
  StyledSeller__ImgMobBlock,
  StyledSeller__Inf,
  StyledSeller__Left,
  StyledSeller__Right,
  StyledSeller__Title,
} from './styles';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Ad from '../Ad/Ad';
import { useEffect } from 'react';
import { setNumberVisibility } from '../../../store/slices/usersSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
export default function Seller() {
  const params = useParams();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const sellerVisibilityNumber = useAppSelector(
    (state) => state.users.numberVisibility,
  );
  useEffect(() => {
    dispatch(setNumberVisibility(false));
  }, [location]);
  const navigate = useNavigate();
  const usersArray = useAppSelector((state) => state.users.users);
  const adsArray = useAppSelector((state) => state.ads.ads);
  const isAuthorized = useAppSelector((state) => state.auth.isAuthorized);
  return (
    <main className="main">
      <StyledMain__Container>
        <StyledMain__CenterBlock>
          <StyledMain__Menu>
            <StyledMenu__LogoLink to={isAuthorized ? '/profile/main' : '/'}>
              <StyledMenu__LogoImg src="../../img/logo.png" alt="logo" />
            </StyledMenu__LogoLink>
            <StyledMenu__Form action="#">
              <StyledMenu__Btn
                id="btnGoBack"
                onClick={(e) => {
                  navigate(isAuthorized ? '/profile/main' : '/');
                }}
              >
                Вернуться на&nbsp;главную
              </StyledMenu__Btn>
            </StyledMenu__Form>
          </StyledMain__Menu>

          <StyledMain__H2>Профиль продавца</StyledMain__H2>

          <StyledMain__ProfileSell>
            <StyledProfileSell__Content>
              <StyledProfileSell__Seller>
                <StyledSeller__Left>
                  <StyledSeller__Img>
                    <a href="" target="_self">
                      <img
                        src={
                          usersArray.filter(
                            (elem) =>
                              elem.id.toString() === params?.id?.toString(),
                          )[0].avatar
                            ? `http://127.0.0.1:8090/${
                                usersArray.filter(
                                  (elem) =>
                                    elem.id.toString() ===
                                    params?.id?.toString(),
                                )[0].avatar
                              }`
                            : isAuthorized
                              ? '../../img/mock_ava.jpg'
                              : '../img/mock_ava.jpg'
                        }
                        alt=""
                      />
                    </a>
                  </StyledSeller__Img>
                </StyledSeller__Left>
                <StyledSeller__Right>
                  <StyledSeller__Title>
                    {usersArray.filter(
                      (elem) => elem.id.toString() === params?.id?.toString(),
                    )[0].name +
                      ' ' +
                      (usersArray.filter(
                        (elem) => elem.id.toString() === params?.id?.toString(),
                      )[0].surname
                        ? usersArray.filter(
                            (elem) =>
                              elem.id.toString() === params?.id?.toString(),
                          )[0].surname
                        : '')}
                  </StyledSeller__Title>
                  <StyledSeller__City>
                    {
                      usersArray.filter(
                        (elem) => elem.id.toString() === params?.id?.toString(),
                      )[0].city
                    }
                  </StyledSeller__City>
                  <StyledSeller__Inf>
                    Продает товары с{' '}
                    {usersArray
                      .filter(
                        (elem) => elem.id.toString() === params?.id?.toString(),
                      )[0]
                      .sells_from.replaceAll('-', ':')}
                  </StyledSeller__Inf>

                  <StyledSeller__ImgMobBlock>
                    <StyledSeller__ImgMob>
                      <a href="" target="_self">
                        <img src="#" alt="" />
                      </a>
                    </StyledSeller__ImgMob>
                  </StyledSeller__ImgMobBlock>

                  <StyledSeller__Btn
                    onClick={() => {
                      dispatch(setNumberVisibility(!sellerVisibilityNumber));
                    }}
                  >
                    {sellerVisibilityNumber ? (
                      <div>
                        <div>Спрятать телефон</div>
                        <div>
                          {
                            usersArray.filter(
                              (elem) =>
                                elem.id.toString() === params?.id?.toString(),
                            )[0].phone
                          }
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div>Показать телефон</div>
                        <div>8 905-ХХХ-ХХ-ХХ</div>
                      </div>
                    )}
                  </StyledSeller__Btn>
                </StyledSeller__Right>
              </StyledProfileSell__Seller>
            </StyledProfileSell__Content>
          </StyledMain__ProfileSell>

          <StyledMain__Title>Товары продавца</StyledMain__Title>
        </StyledMain__CenterBlock>
        <StyledMain__Content>
          <StyledCards>
            {adsArray
              .filter(
                (elem) => elem.user.id.toString() === params?.id?.toString(),
              )
              .map((elem) => (
                <Ad
                  whose={elem.user_id}
                  id={elem.id}
                  key={elem.id}
                  title={elem.title}
                  price={elem.price}
                  place={elem.user.city}
                  src={elem.images[0]?.url}
                  created_on={elem.created_on.slice(0, 10).replaceAll('-', ':')}
                />
              ))}
          </StyledCards>
        </StyledMain__Content>
      </StyledMain__Container>
    </main>
  );
}
