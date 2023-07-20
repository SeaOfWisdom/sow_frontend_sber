import { useDispatch } from 'react-redux';
import { CancelSavedContainer } from '../../styleComponents/utilsStyles/CardsStyle';
import Modal from '../layout/Modal';
import Axios from '../../utils/httpClient';

const ArticleSaved = ({
  articleId = '',
  bookmarked = false,
  isOpen = false,
  setIsOpen = () => {},
  handleSaved = () => {},
}) => {
  const dispatch = useDispatch();
  const addSaved = () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    Axios()
      .post(`add_bookmark/${articleId}`)
      .then(res => {
        handleSaved(true);
        setIsOpen(false);
      })
      .catch(e => {})
      .finally(() => {
        dispatch({ type: 'SET_LOADING', payload: false });
      });
  };
  const removeSaved = () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    Axios()
      .post(`remove_bookmark/${articleId}`)
      .then(res => {
        handleSaved(false);
        setIsOpen(false);
      })
      .catch(e => {})
      .finally(() => {
        dispatch({ type: 'SET_LOADING', payload: false });
      });
  };
  return (
    <Modal isOpen={isOpen} onOpen={() => setIsOpen(false)}>
      <CancelSavedContainer>
        {bookmarked ? (
          <>
            <div className="mtitle">Удалить из сохраненных</div>
            <div className="desc">
              Вы уверены, что хотите удалить статью из сохраненных?
            </div>
            <div className="btns">
              {/* eslint-disable-next-line react/button-has-type */}
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className="btn1"
              >
                Отменить
              </button>
              {/* eslint-disable-next-line react/button-has-type */}
              <button
                onClick={() => {
                  removeSaved();
                }}
                className="btn2"
              >
                Подтвердить
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="mtitle">Добавить в сохраненное</div>
            <div className="desc">
              Вы уверены, хотите добавить эту статью в сохраненных?
            </div>
            <div className="btns">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="btn1"
              >
                Отменить
              </button>
              <button
                type="button"
                onClick={() => {
                  addSaved();
                }}
                className="btn2"
              >
                Подтвердить
              </button>
            </div>
          </>
        )}
      </CancelSavedContainer>
    </Modal>
  );
};
export default ArticleSaved;
