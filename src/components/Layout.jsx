import { useEffect, useState } from "react";
import Footer from "../sections/layout/Footer";
import Header from "../sections/layout/Header";
import {
  getWalletBalance,
  getWalletData,
  isWalletConnect,
} from "../utils/wallet_utils/walletActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../sections/layout/Loading";
import Modal from "../sections/layout/Modal";
import Auth from "../sections/auth/Auth";
import Axios from "../utils/httpClient";
import { setToken } from "../utils/tokenStorge";

const Layout = ({ children, footer__show = true }) => {
  const dispatch = useDispatch();
  const { loading, loading__text, walletData, open_auth, account } = useSelector((s) => s);
  const [action, setAction] = useState(1);
  const [walletObj, setWalletObj] = useState({});

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    var userLang = navigator.language || navigator.userLanguage; 
    console.log('userLang=>', userLang);
    const token = localStorage.getItem("token");
    const accountAddress = localStorage.getItem("accountAddress");
    const walletType = localStorage.getItem("walletType");

    if (!walletData?.isConnect && token && accountAddress && walletType) {
      connectingWallet(walletType);
    }
    // console.log('===>', walletData?.isConnect);
    // console.log('===>', walletData?.isError);
    // console.log('===>', isWalletConnect());
    // console.log('===>', localStorage.getItem('accountAddress'));
  }, []);
  useEffect(() => {
    const intervalGetBalance = setInterval(() => {
      if (walletData?.accountAddress) {
        getWalletBalance().then((b) => {
          if (b.tokenBalance) {
            dispatch({ type: "SET_BALANCE", payload: b.tokenBalance });
          }
        });
      }
    }, 1000);
    return () => clearInterval(intervalGetBalance);
  }, [walletData?.accountAddress]);
  const connectingWallet = (walletType) => {
    // dispatch({
    //   type: "SET_LOADING",
    //   payload: true,
    //   loading__text: "Connecting Wallet...",
    // });
    dispatch({
      type: "SET_WALLET",
      payload: {
        isConnect: false,
        accountAddress: "",
        tokenBalance: -1, //  -1 Tokent Not Found
        isError: false,
      },
    });
    setWalletObj({});
    getWalletData(walletType)
      .then((r) => {
        // console.log('r====>', r);
        if (r?.accountAddress) {
          singIn(r);
        } else {
          dispatch({
            type: "SET_WALLET",
            payload: r,
          });
        }
        setWalletObj(r);
        if(r?.isError){
          openAuthModal(true);
          setAction(3);
        }
      })
      // .catch((r)=>{ })
      .finally(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };
  const singIn = (wallet_Obj) => {
    Axios()
      .get(`/auth/${wallet_Obj?.accountAddress}`)
      .then((res) => {
        if (res?.data?.jwt_token) {
          setToken(res?.data?.jwt_token);
          localStorage.setItem("accountAddress", wallet_Obj?.accountAddress);
          localStorage.setItem("walletType", wallet_Obj?.walletType);
          openAuthModal(false);
          dispatch({
            type: "SET_WALLET",
            payload: wallet_Obj,
          });
          dispatch({
            type: "SET_ACCOUNT",
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
          setWalletObj(wallet_Obj);
          setAction(2);
        }
      })
      .catch((e) => {
        if (e?.response?.status === 400) {
          setAction(2);
          setWalletObj(wallet_Obj);
        } else {
          // console.log("err===>", e?.response);
          setWalletObj({
            ...wallet_Obj,
            isError: true,
            textError: e?.response?.data?.error ?? "Error...",
          });
        }
      });
  };
  const getRole = () => {
    Axios()
      .get(`/get_basic_info`)
      .then((res) => {
        dispatch({
          type: "SET_ACCOUNT",
          payload: res?.data,
        });
      })
      .catch((e) => {});
  };

  const openAuthModal = (is_open = false) => {
    dispatch({ type: "SET_OPEN_AUTH", payload: is_open });
  };
  return (
    <>
      <div
        className={
          account?.role === 1
            ? "containerArticles"
            : account?.role === 2
            ? "containerAuthor"
            : account?.role === 4
            ? "containerValidator"
            : "containerHome"
        }
      >
        <Header />
        {children}
        {footer__show && <Footer />}
      </div>
      <Modal isOpen={open_auth} onOpen={openAuthModal}>
        <Auth
          onOpen={openAuthModal}
          action={action}
          setAction={setAction}
          walletObj={walletObj}
          connectingWallet={connectingWallet}
        />
      </Modal>
      {loading && <Loading loading__text={loading__text} />}
    </>
  );
};
export default Layout;
