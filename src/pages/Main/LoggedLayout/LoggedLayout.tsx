import { Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import LHeader from '../LHeader/LHeader';
import Footer from '../Footer/Footer';
import { useRefreshTokenMutation } from '../../../store/middlewares/auth';
import { Fragment, useEffect, useRef } from 'react';
import {
  setAccessToken,
  setRefreshToken,
} from '../../../store/slices/authorizationSlice';
import { useLazyGetCurrentUserQuery } from '../../../store/middlewares/users';
import { setCurrentUser } from '../../../store/slices/usersSlice';
import { AddAd } from '../AddAd/AddAd';
import { useAppDispatch, useAppSelector } from '../../../hooks';
export default function LoggedLayout() {
  const interval: React.MutableRefObject<NodeJS.Timeout | null> = useRef(null);
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.users.currentUser);
  const refresh_token = useAppSelector((state) => state.auth.refresh_token);
  const access_token = useAppSelector((state) => state.auth.access_token);
  const addAdIsOpen = useAppSelector((state) => state.ads.addAdIsOpen);
  const [getCurrentUser, { data: userData, isSuccess: isUserDataSuccess }] =
    useLazyGetCurrentUserQuery();
  const [refreshTokens, { data: tokenData }] = useRefreshTokenMutation();
  const refreshTokensFunction = async (access: string, refresh: string) => {
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
    return () => {
      if (interval.current === null) return;
      clearTimeout(interval.current);
      interval.current = null;
    };
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
