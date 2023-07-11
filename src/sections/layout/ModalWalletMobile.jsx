import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { UiWalletModal } from "../../styleComponents/UiComponents/UiWalletModal";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ModalWalletMobile = ({
  walletData,
  account,
  modalwallet,
  setModalWallet,
  logOut = () => {},
  copyToClipboard = () => {},
}) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const {t}=useTranslation();
  const navigate  = useNavigate();
  useEffect(() => {
    const onClick = () => {
      setModalWallet(false);
    };
    if (modalwallet) {
      window.addEventListener("click", onClick);
    }
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [modalwallet, ref]);
  return (
    <UiWalletModal isActivewallet={modalwallet}>
      <div className="walletoption">
        <div className="layer" />
        <ul>
          <div className="walletoption-items">
            <h2>Мой кошелек</h2>
            {/* <img
              className="close-circle"
              src="/img/close-circle.svg"
              alt=""
              onClick={() => setModalWallet(false)}
            /> */}
            <div className="walletoption-item">
              <div className="walletoption-item-acc">
                <img src="/img/iconwallet.svg" alt="" />
                <div className="walletoption-item-acc-text">
                  <p>
                    {walletData?.accountAddress?.slice(0, 5)}
                    ...
                    {walletData?.accountAddress?.slice(-4)}
                  </p>
                  <span>
                    {walletData?.tokenBalance} {walletData?.tokenName}
                  </span>
                </div>
              </div>
              <img
                src="/img/copy.svg"
                alt=""
                onClick={() => copyToClipboard(walletData?.accountAddress)}
              />
            </div>
          </div>
          <div className="walletoption-items">
                    <h2>{t('header.useSOWas')}</h2>
                    {account?.role === 1 ?<div className="walletoption-item">
                      <div className={ account?.user_role >= 1
                            ? "walletoption-item-acc"
                            : "walletoption-item-acc walletoption-item-passive"
                        }
                        onClick={() => {
                          if (account?.user_role >= 1) {
                            dispatch({ type: "SET_ROLE", payload: 1 });
                            navigate("/");
                          }
                        }}
                      >
                        <img src="/img/user_avatar_1.svg" alt="" />
                        <p>{t('header.reader')}</p>
                      </div>
                      {account?.role === 1 ? (
                        <p className="current">{t('header.current')}</p>
                      ) : (
                        ""
                      )}
                    </div>:''}
                    {account?.role === 4 ?<div className="walletoption-item">
                      <div
                        className={
                          account?.user_role >= 4
                            ? "walletoption-item-acc"
                            : "walletoption-item-acc walletoption-item-passive"
                        }
                        onClick={() => {
                          if (account?.user_role >= 4) {
                            dispatch({ type: "SET_ROLE", payload: 4 });
                            navigate("/");
                          }
                        }}
                      >
                        <img src="/img/user_avatar_2.svg" alt="" />
                        <p>{t('header.reviewer')}</p>
                      </div>
                      {account?.role === 4 ? (
                        <p className="current">{t('header.current')}</p>
                      ) : (
                        ""
                        // <p className="under-review">на проверке</p>
                      )}
                    </div>:""}
                    {account?.role === 2 ?<div className="walletoption-item">
                      <div
                        className={
                          account?.user_role >= 2
                            ? "walletoption-item-acc"
                            : "walletoption-item-acc walletoption-item-passive"
                        }
                        onClick={() => {
                          if (account?.user_role >= 2) {
                            dispatch({ type: "SET_ROLE", payload: 2 });
                            navigate("/");
                          }
                        }}
                      >
                        <img src="/img/user_avatar_3.svg" alt="" />
                        <p>{t('header.author')}</p>
                      </div>
                      {account?.role === 2 ? (
                        <p className="current">{t('header.current')}</p>
                      ) : (
                        ""
                      )}
                    </div>:""}
                    {account?.role !== 1 ?<div className="walletoption-item">
                      <div className={ account?.user_role >= 1
                            ? "walletoption-item-acc"
                            : "walletoption-item-acc walletoption-item-passive"
                        }
                        onClick={() => {
                          if (account?.user_role >= 1) {
                            dispatch({ type: "SET_ROLE", payload: 1 });
                            navigate("/");
                          }
                        }}
                      >
                        <img src="/img/user_avatar_1.svg" alt="" />
                        <p>{t('header.reader')}</p>
                      </div>
                      {account?.role === 1 ? (
                        <p className="current">{t('header.current')}</p>
                      ) : (
                        ""
                      )}
                    </div>:""}
                    {account?.role !== 4 ?<div className="walletoption-item">
                      <div
                        className={
                          account?.user_role >= 4
                            ? "walletoption-item-acc"
                            : "walletoption-item-acc walletoption-item-passive"
                        }
                        onClick={() => {
                          if (account?.user_role >= 4) {
                            dispatch({ type: "SET_ROLE", payload: 4 });
                            navigate("/");
                          }
                        }}
                      >
                        <img src="/img/user_avatar_2.svg" alt="" />
                        <p>{t('header.reviewer')}</p>
                      </div>
                      {account?.role === 4 ? (
                        <p className="current">{t('header.current')}</p>
                      ) : (
                        ""
                        // <p className="under-review">на проверке</p>
                      )}
                    </div>:""}
                    {account?.role !== 2 ?<div className="walletoption-item">
                      <div
                        className={
                          account?.user_role >= 2
                            ? "walletoption-item-acc"
                            : "walletoption-item-acc walletoption-item-passive"
                        }
                        onClick={() => {
                          if (account?.user_role >= 2) {
                            dispatch({ type: "SET_ROLE", payload: 2 });
                            navigate("/");
                          }
                        }}
                      >
                        <img src="/img/user_avatar_3.svg" alt="" />
                        <p>{t('header.author')}</p>
                      </div>
                      {account?.role === 2 ? (
                        <p className="current">{t('header.current')}</p>
                      ) : (
                        ""
                      )}
                    </div>:""}
                  </div>
          <div className="wallet-switch wallet">
            <img src="/img/empty-wallet-change.svg" alt="" />
            <p>Переключить кошелек</p>
          </div>
          <div
            className="wallet-disable wallet"
            onClick={() => {
              logOut();
            }}
          >
            <img src="/img/empty-wallet-remove.svg" alt="" />
            <p>Отключить кошелек</p>
          </div>
        </ul>
      </div>
    </UiWalletModal>
  );
};

export default ModalWalletMobile;
