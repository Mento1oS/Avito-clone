import {
  StyledContainerSignup,
  StyledModal__Block,
  StyledModal__BtnSignupEnt,
  StyledModal__FormLogin,
  StyledModal__InputCity,
  StyledModal__InputFirstLast,
  StyledModal__InputFirstName,
  StyledModal__InputLogin,
  StyledModal__InputPasswordDouble,
  StyledModal__InputPasswordFirst,
  StyledModal__Logo,
  StyledWrapper,
  StyledModal__BtnEnter,
  StyledNotification,
  StyledFlip,
} from './styles';
import { NavLink } from 'react-router-dom';
import {
  setAccessToken,
  setAuthorizationStatus,
  setIsAlreadyRegisteredError,
  setIsSignUpFormError,
  setRefreshToken,
  setSignUpForm,
} from '../../../store/slices/authorizationSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
  useLogInMutation,
  useRegisterUserMutation,
} from '../../../store/middlewares/auth';
import { setCurrentUser } from '../../../store/slices/usersSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
export default function SignUp() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const signUpForm = useAppSelector((state) => state.auth.signUpForm);
  const location = useLocation();
  const isAlreadyRegisteredError = useAppSelector(
    (state) => state.auth.isAlreadyRegisteredError,
  );
  const isSignUpFormError = useAppSelector(
    (state) => state.auth.isSignUpFormError,
  );
  useEffect(() => {
    dispatch(
      setSignUpForm({
        eMail: '',
        password: '',
        repPassword: '',
        name: '',
        lastName: '',
        city: '',
      }),
    );
    dispatch(setIsSignUpFormError('false'));
    dispatch(setIsAlreadyRegisteredError('false'));
  }, [location]);
  const [registerUser, { isSuccess: isRegistered, data: userData }] =
    useRegisterUserMutation();
  const [logIn, { isSuccess: isLoggedIn, data: logInData }] =
    useLogInMutation();
  const formHandler = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (
      signUpForm.eMail
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ) &&
      signUpForm.password.length > 0 &&
      signUpForm.password === signUpForm.repPassword
    ) {
      await registerUser(signUpForm)
        .unwrap()
        .catch((e) => {
          e.status.toString() === '400'
            ? dispatch(setIsAlreadyRegisteredError('true'))
            : console.log('возникла ошибка, код:' + e.status);
        });
      if (isRegistered === true) {
      }
    } else {
      dispatch(setIsSignUpFormError('true'));
    }
  };
  const fnc = async () => {
    await logIn({ email: signUpForm.eMail, password: signUpForm.password })
      .unwrap()
      .catch((e) => {
        console.log(e.status);
      });
  };
  useEffect(() => {
    if (!isRegistered) return;
    dispatch(setCurrentUser({ ...userData, password: signUpForm.password }));
    fnc();
  }, [isRegistered]);
  useEffect(() => {
    if (!isLoggedIn) return;
    dispatch(setAccessToken(logInData.access_token));
    dispatch(setRefreshToken(logInData.refresh_token));
    dispatch(setAuthorizationStatus(true));
    navigate('/profile');
  }, [isLoggedIn]);
  return (
    <StyledWrapper>
      <StyledContainerSignup>
        <StyledModal__Block>
          <StyledModal__FormLogin
            onSubmit={(e) => e.preventDefault()}
            id="formLogUp"
          >
            <StyledModal__Logo>
              <img src="../img/logo_modal.png" alt="logo" />
            </StyledModal__Logo>
            <StyledModal__InputLogin
              iserror={isSignUpFormError}
              type="text"
              name="login"
              id="loginReg"
              placeholder="email"
              value={signUpForm.eMail}
              onChange={(e) =>
                dispatch(
                  setSignUpForm({ ...signUpForm, eMail: e.target.value }),
                )
              }
            />
            <StyledModal__InputPasswordFirst
              iserror={isSignUpFormError}
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
              value={signUpForm.password}
              onChange={(e) =>
                dispatch(
                  setSignUpForm({ ...signUpForm, password: e.target.value }),
                )
              }
            />
            <StyledModal__InputPasswordDouble
              iserror={isSignUpFormError}
              type="password"
              name="password"
              id="passwordSecond"
              placeholder="Повторите пароль"
              value={signUpForm.repPassword}
              onChange={(e) =>
                dispatch(
                  setSignUpForm({ ...signUpForm, repPassword: e.target.value }),
                )
              }
            />
            <StyledModal__InputFirstName
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя (необязательно)"
              value={signUpForm.name}
              onChange={(e) =>
                dispatch(setSignUpForm({ ...signUpForm, name: e.target.value }))
              }
            />
            <StyledModal__InputFirstLast
              type="text"
              name="first-last"
              id="first-last"
              placeholder="Фамилия (необязательно)"
              value={signUpForm.lastName}
              onChange={(e) =>
                dispatch(
                  setSignUpForm({ ...signUpForm, lastName: e.target.value }),
                )
              }
            />
            <StyledModal__InputCity
              type="text"
              name="city"
              id="city"
              placeholder="Город (необязательно)"
              value={signUpForm.city}
              onChange={(e) =>
                dispatch(setSignUpForm({ ...signUpForm, city: e.target.value }))
              }
            />
            <StyledModal__BtnSignupEnt id="SignUpEnter">
              <a
                onClick={(e) => {
                  formHandler(e);
                }}
              >
                Зарегистрироваться
              </a>
            </StyledModal__BtnSignupEnt>
            <StyledFlip iserror={isAlreadyRegisteredError}>
              <StyledModal__BtnEnter id="btnEnter">
                <NavLink to={'/signin'}>Авторизоваться</NavLink>
              </StyledModal__BtnEnter>
              <StyledNotification>
                Кажется, Вы уже зарегистированы, попробуйте авторизоваться
              </StyledNotification>
            </StyledFlip>
          </StyledModal__FormLogin>
        </StyledModal__Block>
      </StyledContainerSignup>
    </StyledWrapper>
  );
}
