import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SignUpContainer } from '../../styleComponents/auth/SignUpStyle';
import Axios from '../../utils/httpClient';
import { setToken } from '../../utils/tokenStorge';
import Checkbox from '../utils/Checkbox';

const SignUp = ({ onOpen, walletObj }) => {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState('');
  const [check, setCheck] = useState({});
  const [err, setErr] = useState({});
  const signUp = event => {
    event.preventDefault();
    dispatch({ type: 'SET_LOADING', payload: true });
    let t = true;
    let e = {};
    if (!nickname) {
      e = { ...e, nick_name: true };
      t = false;
    }
    if (!check?.check1) {
      e = { ...e, check1: true };
      t = false;
    }
    if (!check?.check2) {
      e = { ...e, check2: true };
      t = false;
    }
    if (t) {
      Axios()
        .post('/new_participant', {
          nickname,
          web3_address: walletObj?.accountAddress,
        })
        .then(res => {
          setToken(res?.data?.jwt_token);
          localStorage.setItem('accountAddress', walletObj?.accountAddress);
          onOpen(false);
          dispatch({
            type: 'SET_WALLET',
            payload: walletObj,
          });
        })
        .catch(e => {
          setErr({ common: true, common_text: e?.response?.data?.error ?? '' });
        })
        .finally(() => {
          dispatch({ type: 'SET_LOADING', payload: false });
        });
    } else {
      dispatch({ type: 'SET_LOADING', payload: false });
      setErr(e);
    }
  };
  return (
    <SignUpContainer>
      <div className="title">Завершите регистрацию</div>
      <div className="desc">
        Введите свой никнейм для завершения регистрации
      </div>
      <form onSubmit={signUp}>
        <div className="input_target">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            Никнейм<span>*</span>
          </label>
          <input
            type="text"
            name="nick_name"
            className="nick_name"
            style={err?.nick_name ? { borderColor: 'red' } : {}}
            value={nickname}
            onChange={e => {
              setNickname(e.target.value);
              setErr({ ...err, nick_name: false });
            }}
          />
        </div>
        <div className="input_target">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label style={err?.check1 ? { color: 'red' } : {}}>
            {/* <input type="checkbox" name="check1" className="checkbox"
                            checked = {check?.check1}
                            onChange={e=>{setCheck({...check, check1: !check?.check1}); setErr({...err, check1: false});}}
                        /> */}
            <Checkbox
              className="checkbox"
              name="check1"
              checked={check?.check1}
              onChange={e => {
                setCheck({ ...check, check1: !check?.check1 });
                setErr({ ...err, check1: false });
              }}
            />
            Я согласен на обработку персональных данных
            <span className="requered">*</span>
          </label>
        </div>
        <div className="input_target seccond">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label style={err?.check2 ? { color: 'red' } : {}}>
            {/* <input type="checkbox" name="check2" className="checkbox"
                            checked = {check?.check2}
                            onChange={e=>{setCheck({...check, check2: !check?.check2}); setErr({...err, check2: false});}}
                        /> */}
            <Checkbox
              className="checkbox"
              name="check2"
              checked={check?.check2}
              onChange={e => {
                setCheck({ ...check, check2: !check?.check2 });
                setErr({ ...err, check2: false });
              }}
            />
            Я прочитал и согласен с{' '}
            <span className="conditions">Правилами и условиями</span>
            <span className="requered">*</span>
          </label>
        </div>
        {err?.common ? (
          <div className="common_error">{err?.common_text ?? ''}</div>
        ) : (
          ''
        )}
        <div>
          <input type="submit" value="Подтвердить" className="btn" />
        </div>
      </form>
    </SignUpContainer>
  );
};
export default SignUp;
