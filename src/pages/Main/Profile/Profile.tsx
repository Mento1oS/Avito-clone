import { useNavigate } from 'react-router-dom';
import {
  StyledCards,
  StyledMain__Container,
  StyledMain__CenterBlock,
  StyledMain__Content,
  StyledMain__H2,
  StyledMain__Menu,
  StyledMain__Profile,
  StyledMain__Title,
  StyledMenu__Btn,
  StyledMenu__Form,
  StyledMenu__LogoImg,
  StyledMenu__LogoLink,
  StyledProfile__Content,
  StyledProfile__Settings,
  StyledProfile__Title,
  StyledSettings__Btn,
  StyledSettings__ChangePhoto,
  StyledSettings__City,
  StyledSettings__Div,
  StyledSettings__FName,
  StyledSettings__Form,
  StyledSettings__Img,
  StyledSettings__LName,
  StyledSettings__Left,
  StyledSettings__Phone,
  StyledSettings__Right,
  StyledUploadAvatar,
} from './styles';
import Ad from '../Ad/Ad';
import { useEffect, useRef } from 'react';
import {
  setCurrentUser,
  setEditUserForm,
} from '../../../store/slices/usersSlice';
import {
  useUpdateAvatarMutation,
  useUpdateCurrentUserMutation,
} from '../../../store/middlewares/users';
import {
  useLazyGetAllAdsQuery,
  useLazyGetMyAdsQuery,
} from '../../../store/middlewares/ads';
import { setAds, setUserAds } from '../../../store/slices/adsSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
export default function Profile() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [getMyAds, { data: updatedMyAds, isSuccess: updatedMyAdsObtained }] =
    useLazyGetMyAdsQuery();
  const [getAllAds, { data: allAds, isSuccess: isAllAdsObtained }] =
    useLazyGetAllAdsQuery();
  const uploadAvatar = useRef<HTMLInputElement | null>(null);
  const access_token = useAppSelector((state) => state.auth.access_token);
  const currentUser = useAppSelector((state) => state.users.currentUser);
  const editUserForm = useAppSelector((state) => state.users.editUserForm);
  const userAds = useAppSelector((state) => state.ads.userAds);
  const [
    updateCurrentUser,
    { data: updatedCurrentUser, isSuccess: isUserUpdated },
  ] = useUpdateCurrentUserMutation();
  const [
    updateAvatar,
    { data: updatedAvatarUser, isSuccess: isAvatarUpdated },
  ] = useUpdateAvatarMutation();
  const obtainUserAds = async () => {
    await getMyAds({ access_token })
      .unwrap()
      .then((data) => dispatch(setUserAds(data)));
  };
  const obtainAllAds = async () => {
    await getAllAds(true)
      .unwrap()
      .then((data) => dispatch(setAds(data)));
  };

  useEffect(() => {
    obtainAllAds();
    obtainUserAds();
  }, []);
  useEffect(() => {
    if (!currentUser.id) return;
    dispatch(
      setEditUserForm({
        name: currentUser.name,
        lastName: currentUser.surname,
        city: currentUser.city,
        phone: currentUser.phone,
      }),
    );
  }, [
    currentUser.name,
    currentUser.surname,
    currentUser.city,
    currentUser.phone,
  ]);
  const handleUpdate = async () => {
    await updateCurrentUser({ currentUser, editUserForm, access_token })
      .unwrap()
      .then((data) => {
        dispatch(setCurrentUser({ ...data, password: currentUser.password }));
      });
  };
  const refreshAvatar = async () => {
    const avatar = new FormData();
    if (!uploadAvatar.current?.files) return;
    avatar.append('file', uploadAvatar.current?.files['0']);
    await updateAvatar({ avatar, access_token })
      .unwrap()
      .then((data) => dispatch(setCurrentUser(data)));
  };
  const handleAvatarChange = () => {
    uploadAvatar.current?.click();
  };
  return (
    <main className="main">
      <StyledMain__Container>
        <StyledMain__CenterBlock>
          <StyledMain__Menu>
            <StyledMenu__LogoLink to="/profile/main">
              <StyledMenu__LogoImg src="img/logo.png" alt="logo" />
            </StyledMenu__LogoLink>
            <StyledMenu__Form onSubmit={(e) => e.preventDefault()} action="#">
              <StyledMenu__Btn
                onClick={(e) => navigate('/profile/main')}
                id="btnGoBack"
              >
                Вернуться на&nbsp;главную
              </StyledMenu__Btn>
            </StyledMenu__Form>
          </StyledMain__Menu>

          <StyledMain__H2>
            Здравствуйте
            {currentUser.name ? ', ' + currentUser.name : ''}!
          </StyledMain__H2>

          <StyledMain__Profile>
            <StyledProfile__Content>
              <StyledProfile__Title>Настройки профиля</StyledProfile__Title>
              <StyledProfile__Settings>
                <StyledSettings__Left>
                  <StyledSettings__Img>
                    <img
                      src={
                        currentUser.avatar
                          ? `http://127.0.0.1:8090/${currentUser.avatar}`
                          : ''
                      }
                      alt=""
                    />
                  </StyledSettings__Img>
                  <StyledSettings__ChangePhoto onClick={handleAvatarChange}>
                    Заменить
                  </StyledSettings__ChangePhoto>
                  <StyledUploadAvatar
                    onChange={() => refreshAvatar()}
                    ref={uploadAvatar}
                    type="file"
                  />
                </StyledSettings__Left>
                <StyledSettings__Right>
                  <StyledSettings__Form onSubmit={(e) => e.preventDefault()}>
                    <StyledSettings__Div>
                      <label htmlFor="fname">Имя</label>
                      <StyledSettings__FName
                        id="settings-fname"
                        name="fname"
                        placeholder=""
                        value={editUserForm.name}
                        onChange={(e) => {
                          dispatch(
                            setEditUserForm({
                              ...editUserForm,
                              name: e.target.value,
                            }),
                          );
                        }}
                      />
                    </StyledSettings__Div>

                    <StyledSettings__Div>
                      <label htmlFor="lname">Фамилия</label>
                      <StyledSettings__LName
                        id="settings-lname"
                        name="lname"
                        type="text"
                        placeholder=""
                        value={editUserForm.lastName}
                        onChange={(e) => {
                          dispatch(
                            setEditUserForm({
                              ...editUserForm,
                              lastName: e.target.value,
                            }),
                          );
                        }}
                      />
                    </StyledSettings__Div>

                    <StyledSettings__Div>
                      <label htmlFor="city">Город</label>
                      <StyledSettings__City
                        value={editUserForm.city}
                        id="settings-city"
                        name="city"
                        type="text"
                        placeholder=""
                        onChange={(e) => {
                          dispatch(
                            setEditUserForm({
                              ...editUserForm,
                              city: e.target.value,
                            }),
                          );
                        }}
                      />
                    </StyledSettings__Div>

                    <StyledSettings__Div>
                      <label htmlFor="phone">Телефон</label>
                      <StyledSettings__Phone
                        value={editUserForm.phone?.toString()}
                        id="settings-phone"
                        name="phone"
                        type="tel"
                        placeholder="+79161234567"
                        onChange={(e) => {
                          dispatch(
                            setEditUserForm({
                              ...editUserForm,
                              phone: e.target.value,
                            }),
                          );
                        }}
                      />
                    </StyledSettings__Div>

                    <StyledSettings__Btn
                      onClick={() => {
                        handleUpdate();
                      }}
                      disabled={
                        editUserForm.name === currentUser.name &&
                        editUserForm.lastName === currentUser.surname &&
                        editUserForm.city === currentUser.city &&
                        editUserForm.phone === currentUser.phone
                      }
                      id="settings-btn"
                    >
                      Сохранить
                    </StyledSettings__Btn>
                  </StyledSettings__Form>
                </StyledSettings__Right>
              </StyledProfile__Settings>
            </StyledProfile__Content>
          </StyledMain__Profile>

          <StyledMain__Title>Мои товары</StyledMain__Title>
        </StyledMain__CenterBlock>
        <StyledMain__Content>
          <StyledCards>
            {userAds.map((elem) => (
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
