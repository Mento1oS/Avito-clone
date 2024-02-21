import { NavLink, useLocation } from 'react-router-dom';
import {
  StyledCard,
  StyledCard__Date,
  StyledCard__Image,
  StyledCard__Place,
  StyledCard__Price,
  StyledCard__Title,
  StyledCards__Item,
} from './styles';
import { setActiveImage, setAdImages } from '../../../store/slices/imagesSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
export default function Ad({
  whose,
  id,
  title,
  price,
  place,
  src,
  created_on,
}: Readonly<{
  whose: number;
  id: number;
  title: string;
  price: number;
  place: string | undefined;
  src: string;
  created_on: string;
}>) {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const ads = useAppSelector((state) => state.ads.ads);
  const isAuthorized = useAppSelector((state) => state.auth.isAuthorized);
  const currentUser = useAppSelector((state) => state.users.currentUser);
  const handleAdImageRefresh = () => {
    const array = ads.filter((ad) => ad.id === id)[0]?.images;
    if (!array?.length) {
      dispatch(setAdImages([]));
      dispatch(setActiveImage({}));
    } else {
      dispatch(setAdImages(array));
      dispatch(setActiveImage(array[0]));
    }
  };
  return (
    <StyledCards__Item onClick={handleAdImageRefresh}>
      <StyledCard>
        <StyledCard__Image>
          <NavLink
            to={
              whose === currentUser.id
                ? `/profile/myadv/${id}`
                : isAuthorized
                  ? `/profile/seller/adv/${id}`
                  : `/seller/adv/${id}`
            }
          >
            <img
              src={
                src
                  ? `http://127.0.0.1:8090/${src}`
                  : isAuthorized
                    ? location.pathname.split('/').length === 4
                      ? '../../img/photo_2024-01-26_21-43-23.jpg'
                      : '../img/photo_2024-01-26_21-43-23.jpg'
                    : location.pathname.split('/').length === 3
                      ? '../img/photo_2024-01-26_21-43-23.jpg'
                      : './img/photo_2024-01-26_21-43-23.jpg'
              }
              alt="picture"
            />
          </NavLink>
        </StyledCard__Image>
        <div className="card__content">
          <NavLink
            to={
              whose === currentUser.id
                ? `/profile/myadv/${id}`
                : isAuthorized
                  ? `/profile/seller/adv/${id}`
                  : `/seller/adv/${id}`
            }
          >
            <StyledCard__Title>{title}</StyledCard__Title>
          </NavLink>
          <StyledCard__Price>{price} ₽</StyledCard__Price>
          <StyledCard__Place>{place}</StyledCard__Place>
          <StyledCard__Date>{`Добавлено ${created_on}`}</StyledCard__Date>
        </div>
      </StyledCard>
    </StyledCards__Item>
  );
}
