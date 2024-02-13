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
import { useDispatch, useSelector } from 'react-redux';
import { setActiveImage, setAdImages } from '../../../store/slices/imagesSlice';
export default function Ad(props) {
  const dispatch = useDispatch();
  const location = useLocation();
  const ads = useSelector((state) => state.ads.ads);
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);
  const currentUser = useSelector((state) => state.users.currentUser);
  const handleAdImageRefresh = () => {
    const array = ads.filter((ad) => ad.id === props.id)[0]?.images;
    if (!array.length) {
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
              props.whose === currentUser.id
                ? `/profile/myadv/${props.id}`
                : isAuthorized
                  ? `/profile/seller/adv/${props.id}`
                  : `/seller/adv/${props.id}`
            }
          >
            <img
              src={
                props.src
                  ? `http://127.0.0.1:8090/${props.src}`
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
              props.whose === currentUser.id
                ? `/profile/myadv/${props.id}`
                : isAuthorized
                  ? `/profile/seller/adv/${props.id}`
                  : `/seller/adv/${props.id}`
            }
          >
            <StyledCard__Title>{props.title}</StyledCard__Title>
          </NavLink>
          <StyledCard__Price>{props.price} ₽</StyledCard__Price>
          <StyledCard__Place>{props.place}</StyledCard__Place>
          <StyledCard__Date>{`Добавлено ${props.created_on}`}</StyledCard__Date>
        </div>
      </StyledCard>
    </StyledCards__Item>
  );
}
