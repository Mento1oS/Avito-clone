import {
  StyledCards,
  StyledMain__Container,
  StyledMain__Content,
  StyledMain__H2,
  StyledMain__Search,
  StyledSearch__Btn,
  StyledSearch__Form,
  StyledSearch__LogoImg,
  StyledSearch__LogoLink,
  StyledSearch__LogoMobLink,
  StyledSearch__Text,
  StyledSearch__TextMob,
} from './styles';
import Ad from '../Ad/Ad';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchField,
  setSearchFilter,
} from '../../../store/slices/adsSlice';
import { useLocation } from 'react-router-dom';
import { setAds } from '../../../store/slices/adsSlice';
import {
  useGetAllAdsQuery,
  useLazyGetAllAdsQuery,
} from '../../../store/middlewares/ads';
import { useLazyGetAllImagesQuery } from '../../../store/middlewares/images';
import { setImages } from '../../../store/slices/imagesSlice';
export default function Landing() {
  const dispatch = useDispatch();
  const userAds = useSelector((state) => state.ads.userAds);
  const [refreshAds] = useLazyGetAllAdsQuery();
  const location = useLocation();
  const searchFilter = useSelector((state) => state.ads.searchFilter);
  const searchField = useSelector((state) => state.ads.searchField);
  const adsArray = useSelector((state) => state.ads.ads);
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);
  const adsRefresher = async () => {
    await refreshAds()
      .unwrap()
      .then((data) => {
        dispatch(setAds(data));
      });
  };
  useEffect(() => {
    dispatch(setSearchFilter(''));
  }, [location]);
  useEffect(() => {
    adsRefresher();
  }, [JSON.stringify(userAds)]);
  return (
    <main className="main">
      <StyledMain__Search>
        <StyledSearch__LogoLink to={isAuthorized ? '/profile/main' : ''}>
          <StyledSearch__LogoImg src="../img/logo.png" alt="logo" />
        </StyledSearch__LogoLink>
        <StyledSearch__LogoMobLink to="/">
          <img
            className="search__logo-mob-img"
            src="img/logo-mob.png"
            alt="logo"
          />
        </StyledSearch__LogoMobLink>
        <StyledSearch__Form onSubmit={(e) => e.preventDefault()}>
          <StyledSearch__Text
            onInput={(e) => dispatch(setSearchField(e.target.value))}
            type="search"
            placeholder="Поиск по объявлениям"
            name="search"
          />
          <StyledSearch__TextMob
            type="search"
            placeholder="Поиск"
            name="search-mob"
          />
          <StyledSearch__Btn
            onClick={(e) => {
              e.preventDefault();
              dispatch(setSearchFilter(searchField));
            }}
          >
            Найти
          </StyledSearch__Btn>
        </StyledSearch__Form>
      </StyledMain__Search>
      <StyledMain__Container>
        <StyledMain__H2>Объявления</StyledMain__H2>
        <StyledMain__Content>
          <StyledCards>
            {adsArray.length &&
              adsArray
                .filter((elem) =>
                  elem.title.toLowerCase().includes(searchFilter.toLowerCase()),
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
                    created_on={elem.created_on
                      .slice(0, 10)
                      .replaceAll('-', ':')}
                  />
                ))}
          </StyledCards>
        </StyledMain__Content>
      </StyledMain__Container>
    </main>
  );
}
