import { Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import LHeader from '../LHeader/LHeader';
import Footer from '../Footer/Footer';
import { useRefreshTokenMutation } from '../../../store/middlewares/auth';
import { Fragment, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAccessToken,
  setRefreshToken,
} from '../../../store/slices/authorizationSlice';
import { useLazyGetCurrentUserQuery } from '../../../store/middlewares/users';
import { setCurrentUser } from '../../../store/slices/usersSlice';
import { AddAd } from '../AddAd/AddAd';
export default function LoggedLayout() {
  const interval = useRef(0);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);
  const refresh_token = useSelector((state) => state.auth.refresh_token);
  const access_token = useSelector((state) => state.auth.access_token);
  const addAdIsOpen = useSelector((state) => state.ads.addAdIsOpen);
  const [getCurrentUser, { data: userData, isSuccess: isUserDataSuccess }] =
    useLazyGetCurrentUserQuery();
  const [refreshTokens, { data: tokenData, isSuccess: isTokenSuccess }] =
    useRefreshTokenMutation();
  const refreshTokensFunction = async (access, refresh) => {
    try {
      await refreshTokens({
        access_token: access,
        refresh_token: refresh,
      })
        .unwrap()
        .then((payload) => {
          dispatch(setAccessToken(payload.access_token));
          dispatch(setRefreshToken(payload.refresh_token));
        });
    } catch (e) {
      console.log(e);
    }
  };
  const getCurrentUserWrapper = async () => {
    await getCurrentUser({ access_token }).unwrap();
  };
  useEffect(() => {
    interval.current = setTimeout(() => {
      refreshTokensFunction(access_token, refresh_token);
    }, 240000);
    return () => clearTimeout(interval.current);
  }, [tokenData]);
  useEffect(() => {
    if (currentUser.id) return;
    getCurrentUserWrapper();
  }, []);
  useEffect(() => {
    if (isUserDataSuccess === false) return;
    dispatch(setCurrentUser({ ...currentUser, ...userData }));
  }, [isUserDataSuccess]);
  return (
    <Container>
      {addAdIsOpen ? (
        <AddAd />
      ) : (
        <Fragment>
          <LHeader />
          <Outlet />
          <Footer />
        </Fragment>
      )}
    </Container>
  );
}
