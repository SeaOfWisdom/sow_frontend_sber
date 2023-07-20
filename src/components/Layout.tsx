import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../sections/layout/Footer';
import Header from '../sections/layout/Header';
import {
  getWalletBalance,
  getWalletData,
} from '../utils/wallet_utils/walletActions';
import Loading from '../sections/layout/Loading';
import Modal from '../sections/layout/Modal';
import Auth from '../sections/auth/Auth';
import Axios from '../utils/httpClient';
import { setToken } from '../utils/tokenStorge';

enum EWalletType {
  METAMASK = 'MetaMask',
  UNIPASS = 'Unipass',
}

type TWallet = {
  accountAddress: string;
  walletType: EWalletType;
  isConnect: boolean;
  isError?: boolean;
};
type Props = { footerShow?: boolean };

const Layout: FC<Props> = ({ footerShow = true }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { loading, loadingText, walletData, openAuth, account } = useSelector(
    s => s
  );
  const [action, setAction] = useState(1);
  const [walletObj, setWalletObj] = useState<TWallet | unknown>({});
  const [isCorrectNetwork, setCorrectNetwork] = useState(false);

  const openAuthModal = (isOpen = false) => {
    dispatch({ type: 'SET_OPEN_AUTH', payload: isOpen });
  };
  const getRole = () => {
    Axios()
      .get(`/get_basic_info`)
      .then(res => {
        dispatch({
          type: 'SET_ACCOUNT',
          payload: res?.data,
        });
      })
      .catch(e => {});
  };

  const singIn = (walletObj: TWallet) => {
    Axios()
      .get(`/auth/${walletObj?.accountAddress}`)
      .then(res => {
        if (res?.data?.jwt_token) {
          setToken(res?.data?.jwt_token);
          localStorage.setItem('accountAddress', walletObj?.accountAddress);
          localStorage.setItem('walletType', walletObj?.walletType);
          openAuthModal(false);
          dispatch({
            type: 'SET_WALLET',
            payload: walletObj,
          });
          dispatch({
            type: 'SET_ACCOUNT',
            payload: {
              nickname: res?.data?.nickname,
              role: res?.data?.role,
            },
          });
          if (!res?.data?.role) {
            getRole();
          }
          setAction(1);
        } else {
          setWalletObj(walletObj);
          setAction(2);
        }
      })
      .catch(e => {
        if (e?.response?.status === 400) {
          setAction(2);
          setWalletObj(walletObj);
        } else {
          // console.log("err===>", e?.response);
          setWalletObj({
            ...walletObj,
            isError: true,
            textError: e?.response?.data?.error ?? 'Error...',
          });
        }
      });
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const connectingWallet = walletType => {
    // dispatch({
    //   type: "SET_LOADING",
    //   payload: true,
    //   loadingText: "Connecting Wallet...",
    // });
    dispatch({
      type: 'SET_WALLET',
      payload: {
        isConnect: false,
        accountAddress: '',
        tokenBalance: 0,
        isError: false,
      },
    });
    setWalletObj({});
    getWalletData(walletType)
      .then(r => {
        // console.log('r====>', r);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (r?.accountAddress) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          singIn(r);
        } else {
          dispatch({
            type: 'SET_WALLET',
            payload: r,
          });
        }
        setWalletObj(r);
        if (r?.isError) {
          openAuthModal(true);
          setAction(3);
        }
      })
      // .catch((r)=>{ })
      .finally(() => {
        setTimeout(
          () => dispatch({ type: 'SET_LOADING', payload: false }),
          2000
        );
      });
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [location]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const accountAddress = localStorage.getItem('accountAddress');
    const walletType = localStorage.getItem('walletType');

    if (!walletData?.isConnect && token && accountAddress && walletType) {
      connectingWallet(walletType);
    } else {
      setTimeout(() => dispatch({ type: 'SET_LOADING', payload: false }), 3000);
    }
  }, []);
  useEffect(() => {
    const intervalGetBalance = setInterval(() => {
      if (walletData?.accountAddress) {
        getWalletBalance().then(b => {
          if (b.tokenBalance) {
            dispatch({ type: 'SET_BALANCE', payload: b.tokenBalance });
          }
        });
      }
    }, 1000);
    return () => clearInterval(intervalGetBalance);
  }, [walletData?.accountAddress]);
  useEffect(() => {
    if (window.ethereum) {
      const ethereum = window.ethereum;

      const handleNetworkChanged = (networkId: string) => {
        switch (networkId) {
          case '97':
            setCorrectNetwork(true);
            break;
          case '111000':
            setCorrectNetwork(true);
            break;
          default:
            setCorrectNetwork(false);
        }
      };

      ethereum.on('networkChanged', handleNetworkChanged);

      ethereum
        .request({ method: 'net_version' })
        .then((networkId: string) => {
          handleNetworkChanged(networkId);
        })
        .catch((err: any) => {
          console.log(err);
        });

      return () => {
        ethereum.removeListener('networkChanged', handleNetworkChanged);
      };
    }
  }, []);

  return (
    <>
      <div
        className={
          // eslint-disable-next-line no-nested-ternary
          account?.role === 1
            ? 'containerArticles'
            : // eslint-disable-next-line no-nested-ternary
            account?.role === 2
            ? 'containerAuthor'
            : account?.role === 4
            ? 'containerValidator'
            : 'containerHome'
        }
      >
        <Header isCorrectNetwork={isCorrectNetwork} setAuthAction={setAction} />
        <Outlet />
        {footerShow && <Footer />}
      </div>
      <Modal isOpen={openAuth} onOpen={openAuthModal}>
        <Auth
          onOpen={openAuthModal}
          action={action}
          setAction={setAction}
          walletObj={walletObj}
          connectingWallet={connectingWallet}
        />
      </Modal>
      {loading && <Loading loadingText={loadingText} />}
    </>
  );
};
export default Layout;
