import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  StyledContainerBg,
  StyledFormNewArt__Area,
  StyledFormNewArt__Block,
  StyledFormNewArt__BtnPub,
  StyledModal__Block,
  StyledModal__BtnClose,
  StyledModal__BtnCloseLine,
  StyledModal__Content,
  StyledModal__FormNewArt,
  StyledModal__Reviews,
  StyledModal__Scroll,
  StyledModal__Title,
  StyledWrapper,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import Review from '../Review/Review';
import {
  setAdComments,
  setCommentTextArea,
} from '../../../store/slices/adsSlice';
import { useEffect } from 'react';
import {
  useAddCommentMutation,
  useLazyGetCommentsByAdIdQuery,
} from '../../../store/middlewares/ads';
export default function Reviews() {
  const [addComment, { isSuccess: commentAdded, data: newCommentData }] =
    useAddCommentMutation();
  const [getAllComments, { data: commentsQuery, isSuccess: commentsObtained }] =
    useLazyGetCommentsByAdIdQuery();
  const access_token = useSelector((state) => state.auth.access_token);
  const params = useParams();
  const adComments = useSelector((state) => state.ads.adComments);
  const users = useSelector((state) => state.users.users);
  const commentTextArea = useSelector((state) => state.ads.commentTextArea);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);
  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    dispatch(setCommentTextArea(''));
  }, [location]);
  const refreshComments = async () => {
    const id = params.id;
    await getAllComments({ id }).unwrap();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (commentTextArea === '') return;
    const id = params.id;
    const text = commentTextArea;
    await addComment({ id, access_token, text }).unwrap();
  };
  useEffect(() => {
    if (!commentsObtained) return;
    dispatch(setAdComments(commentsQuery));
  }, [commentsObtained]);
  useEffect(() => {
    if (!commentAdded) return;
    dispatch(setCommentTextArea(''));
    refreshComments();
  }, [commentAdded]);
  return (
    <StyledWrapper>
      <StyledContainerBg>
        <StyledModal__Block>
          <StyledModal__Content>
            <StyledModal__Title>Отзывы о товаре</StyledModal__Title>
            <StyledModal__BtnClose onClick={goBack}>
              <StyledModal__BtnCloseLine></StyledModal__BtnCloseLine>
            </StyledModal__BtnClose>
            <StyledModal__Scroll>
              <StyledModal__FormNewArt
                id="formNewArt"
                onSubmit={(e) => handleSubmit(e)}
              >
                <StyledFormNewArt__Block>
                  <label htmlFor="text">
                    {isAuthorized
                      ? 'Добавить отзыв'
                      : 'Авторизуйтесь, чтобы добавить отзыв'}
                  </label>
                  <StyledFormNewArt__Area
                    disabled={!isAuthorized}
                    name="text"
                    id="formArea"
                    cols="auto"
                    rows="5"
                    placeholder="Введите описание"
                    value={commentTextArea}
                    onChange={(e) => {
                      dispatch(setCommentTextArea(e.target.value));
                    }}
                  ></StyledFormNewArt__Area>
                </StyledFormNewArt__Block>
                <StyledFormNewArt__BtnPub
                  disabled={!isAuthorized}
                  id="btnPublish"
                >
                  Опубликовать
                </StyledFormNewArt__BtnPub>
              </StyledModal__FormNewArt>

              <StyledModal__Reviews>
                {adComments.map((elem) => {
                  return (
                    <Review
                      key={elem.id}
                      id={elem.id}
                      text={elem.text}
                      created_on={
                        elem.created_on.slice(0, 10).replaceAll('-', ':') +
                        ' в ' +
                        elem.created_on.slice(11, 16).replaceAll('-', ':')
                      }
                      name={
                        users.filter((user) => user.id === elem.author_id)[0]
                          .name
                      }
                    />
                  );
                })}
              </StyledModal__Reviews>
            </StyledModal__Scroll>
          </StyledModal__Content>
        </StyledModal__Block>
      </StyledContainerBg>
    </StyledWrapper>
  );
}
