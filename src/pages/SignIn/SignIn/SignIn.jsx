import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  StyledContainerEnter,
  StyledModal__Block,
  StyledModal__BtnEnter,
  StyledModal__BtnSignup,
  StyledModal__FormLogin,
  StyledModal__InputLogin,
  StyledModal__InputPassword,
  StyledModal__Logo,
  StyledWrapper,
  StyledFlip,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAccessToken,
  setAuthorizationStatus,
  setIsLogInFormError,
  setIsLogInWrong,
  setRefreshToken,
  setSignInForm,
} from '../../../store/slices/authorizationSlice';
import { useEffect } from 'react';
import { useLogInMutation } from '../../../store/middlewares/auth';
import { setCurrentUser } from '../../../store/slices/usersSlice';
export default function SignIn() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signInForm = useSelector((state) => state.auth.signInForm);
  const currentUser = useSelector((state) => state.users.currentUser);
  const [logIn, { isSuccess, data }] = useLogInMutation();
  const isLogInFromError = useSelector((state) => state.auth.isLogInFromError);
  const isLogInWrong = useSelector((state) => state.auth.isLogInWrong);
  useEffect(() => {
    dispatch(
      setSignInForm({
        eMail: '',
        password: '',
      }),
    );
    dispatch(setIsLogInWrong('false'));
    dispatch(setIsLogInFormError('false'));
  }, [location]);
  const handleSignIn = async (e) => {
    e.preventDefault();
    if (
      !signInForm.eMail
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ) ||
      !(signInForm.password.length > 0)
    ) {
      dispatch(setIsLogInFormError('true'));
      return;
    }
    await logIn({ password: signInForm.password, email: signInForm.eMail })
      .unwrap()
      .catch((e) => {
        dispatch(setIsLogInFormError('true'));
        dispatch(setIsLogInWrong('true'));
      });
  };
  useEffect(() => {
    if (!isSuccess) return;
    dispatch(setAccessToken(data.access_token));
    dispatch(setRefreshToken(data.refresh_token));
    dispatch(setCurrentUser({ ...currentUser, password: signInForm.password }));
    dispatch(setAuthorizationStatus(true));
    navigate('/profile');
  }, [isSuccess]);
  return (
    <StyledWrapper>
      <StyledContainerEnter>
        <StyledModal__Block>
          <StyledModal__FormLogin
            id="formLogIn"
            onSubmit={(e) => e.preventDefault()}
          >
            <StyledModal__Logo>
              <img src="../img/logo_modal.png" alt="logo" />
            </StyledModal__Logo>
            <StyledModal__InputLogin
              iserror={isLogInFromError}
              type="text"
              name="login"
              id="formlogin"
              placeholder="email"
              value={signInForm.eMail}
              onChange={(e) => {
                dispatch(
                  setSignInForm({ ...signInForm, eMail: e.target.value }),
                );
              }}
            />
            <StyledModal__InputPassword
              iserror={isLogInFromError}
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
              value={signInForm.password}
              onChange={(e) => {
                dispatch(
                  setSignInForm({ ...signInForm, password: e.target.value }),
                );
              }}
            />
            <StyledModal__BtnEnter id="btnEnter">
              <NavLink
                onClick={(e) => {
                  handleSignIn(e);
                }}
              >
                Войти
              </NavLink>
            </StyledModal__BtnEnter>
            <StyledModal__BtnSignup id="btnSignUp">
              <NavLink to={'/signup'}>Зарегистрироваться</NavLink>
            </StyledModal__BtnSignup>
            <StyledFlip iserror={isLogInWrong}>
              Ошибка авторизации. Проверьте данные или зарегистируйтесь
            </StyledFlip>
          </StyledModal__FormLogin>
        </StyledModal__Block>
      </StyledContainerEnter>
    </StyledWrapper>
  );
}
