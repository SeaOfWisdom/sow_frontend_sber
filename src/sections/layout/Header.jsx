import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useToast,
  Box,
  Stack,
  Progress,
  Tooltip,
} from '@chakra-ui/react';
import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { HeaderContainer } from '../../styleComponents/layout/HeaderStyle';
import { UiSelect } from '../../styleComponents/UiComponents/UISelect';
import { UiSelectwallet } from '../../styleComponents/UiComponents/UIselectwallet';
import { getLanguage } from '../../components/helpers/language';
import { removeToken } from '../../utils/tokenStorge';
import { copyText } from '../../utils/functions';
import {
  isWalletConnect,
  logOutUpWallet,
} from '../../utils/wallet_utils/walletActions';

import { BottomMenu } from '../../styleComponents/layout/BottomMenu';
import ModalWalletMobile from './ModalWalletMobile';
import FillYourProfile from './FillYourProfile';
import { walletTypes } from '../../utils/constants';

const OverlayMenu = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  padding: 16px;
  position: relative;
  li {
    opacity: ${props => (props.open ? 1 : 0)};
    display: ${props => (props.open ? 'block' : 'none')};
    font-size: 25px;
    margin: 16px 0px;
    // transition: opacity 0.8s ease-in-out;
    transition: opacity 0.4s ease-in-out;
  }
  & hr {
    border: none;
    width: 100%;
    height: 1px;
    background: #cfd2d8;
    /* margin: 8px 0px; */
  }
  .wallet {
    opacity: ${props => (props.open ? 1 : 0)};
    display: ${props => (props.open ? 'block' : 'none')};
    position: absolute;
    bottom: 30px;
    width: calc(100% - 32px);
    & .account {
      display: flex;
      justify-content: center;
      height: 59px;
      align-items: center;
      background: #8be4d4;
      border: 1px solid #2a2c35;
      box-shadow: 0px 2px 0px #2a2c35;
      border-radius: 1000px;
      padding: 12px 24px;
      & img {
        margin-right: 8px;
      }
      & span {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #2a2c35;
        font-family: 'Golos';
      }
    }
  }
`;
const Overlay = styled.div`
  z-index: 111;
  position: fixed;
  left: 0px;
  top: 59px;
  bottom: 0px;
  /* height: ${props => (props.open ? '100%' : 0)}; */
  /* height: 91vh; */
  width: ${props => (props.open ? ' 100%' : 0)};
  opacity: ${props => (props.open ? 1 : 0)};
  /* transition: 0.6s ease-in-out; */
  transition: width 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out;
  @media (min-width: 900px) {
    display: none;
  }
  /* background-image: url(${props =>
    // eslint-disable-next-line no-nested-ternary
    props?.account__role === 1
      ? '/img/diagonal_lines.svg'
      : // eslint-disable-next-line no-nested-ternary
      props?.account__role === 2
      ? '/img/shapes.svg'
      : props?.account__role === 4
      ? '/img/mathematics.svg'
      : ''}) !important;
       */
  background: ${props =>
    // eslint-disable-next-line no-nested-ternary
    props?.account__role === 1
      ? '#f0f3f4'
      : // eslint-disable-next-line no-nested-ternary
      props?.account__role === 2
      ? '#f9f0f0'
      : props?.account__role === 4
      ? '#f5fffe'
      : '#F0F3F4'};
  & .btn {
    & a {
      font-size: 14px;
      font-family: Golos;
      font-weight: 500;
    }
  }
  & .btn-wallet {
    margin-bottom: 24px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    border-radius: 1000px;
    border: 1px solid #2a2c35;
    background: #fff;
    align-items: center;
    box-shadow: 0px 2px 0px 0px #2a2c35;
    padding: 12px 24px;
    & .wallet_target {
      display: flex;
      align-items: center;
      & img {
        width: 32px;
        height: 32px;
        margin-right: 12px;
      }
      & .wallet_id {
        font-size: 14px;
        font-family: Golos;
        font-weight: 500;
      }
      & .balance {
        color: #847f99;
        font-size: 12px;
        font-family: Golos;
      }
    }
  }
`;
const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 15px;
  height: 3px;
  margin: 5px;

  background: #2a2c35;
  transition: width 0.8s ease-in-out;

  :nth-child(2) {
    width: 20px;
    margin-left: 0px;
  }
  :nth-child(3) {
    width: 13px;
    margin-left: 7px;
  }
`;
const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 900px) {
    display: none;
  }
`;
const Item = styled.li`
  & a {
    text-decoration: none;
    white-space: pre;
    padding: 20px 24px;
    border: 1px solid #2a2c35;
    border-radius: 1000px;
    display: block;
    font-family: 'Golos';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #2a2c35;
  }
  & .active {
    background: #d890f0;
  }
`;

const Down = () => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.80562 1.35781L5.58206 5.58137C5.32288 5.84054 4.90267 5.84054 4.64349 5.58137L0.419927 1.35781C0.160747 1.09863 0.160748 0.678416 0.419927 0.419237C0.679105 0.160058 1.09932 0.160058 1.3585 0.419237L5.11277 4.17351L8.86705 0.419238C9.12623 0.160059 9.54644 0.160059 9.80562 0.419238C10.0648 0.678416 10.0648 1.09863 9.80562 1.35781Z"
      fill="#2A2C35"
    />
  </svg>
);
const Up = () => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.80562 4.64219L5.58206 0.418634C5.32288 0.159455 4.90267 0.159455 4.64349 0.418634L0.419927 4.64219C0.160747 4.90137 0.160748 5.32158 0.419927 5.58076C0.679105 5.83994 1.09932 5.83994 1.3585 5.58076L5.11277 1.82649L8.86705 5.58076C9.12623 5.83994 9.54644 5.83994 9.80562 5.58076C10.0648 5.32158 10.0648 4.90137 9.80562 4.64219Z"
      fill="#2A2C35"
    />
  </svg>
);

const Header = ({ isCorrectNetwork, setAuthAction }) => {
  const navigate = useNavigate();
  const [toggle, toggleNav] = useState(false);
  const ref = useRef(null);
  const dispatch = useDispatch();

  const { walletData, account } = useSelector(s => s);
  const [active, setActive] = useState(false);
  const [activewallet, setActivewallet] = useState(false);
  const { t, i18n } = useTranslation();
  const [modalwallet, setModalWallet] = useState(false);

  useEffect(() => {
    const onClick = () => {
      setActive(false);
      setActivewallet(false);
    };
    if (active || activewallet) {
      window.addEventListener('click', onClick);
    }
    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [active, activewallet, ref]);
  const onLanguageHandle = newLang => {
    i18n.changeLanguage(newLang);
  };
  const lan = getLanguage();
  const openAuthModal = (isOpen = false) => {
    dispatch({ type: 'SET_OPEN_AUTH', payload: isOpen });
  };
  const logOut = () => {
    const walletType = localStorage.getItem('walletType');

    if (walletType === walletTypes.Unipass) {
      logOutUpWallet();
    }
    removeToken();
    localStorage.removeItem('accountAddress');
    localStorage.removeItem('walletType');
    dispatch({
      type: 'SET_WALLET',
      payload: {
        isConnect: false,
        accountAddress: '',
        tokenBalance: -1, //  -1 Tokent Not Found
        isError: false,
      },
    });

    dispatch({
      type: 'SET_ACCOUNT',
      payload: {
        role: 0,
        user_role: 0,
      },
    });
    dispatch({
      type: 'SET_ROLE',
      payload: 0,
    });
    // navigate("/");
  };
  const toast = useToast();
  const copyToClipboard = (text = '') => {
    copyText(text);
    toast({
      // title: "Account created.",
      status: 'success',
      duration: 1000,
      position: 'top',
      isClosable: true,

      render: () => (
        <Box
          color="#2A2C35"
          p={3}
          bg="white.500"
          style={{
            display: 'flex',
            fontFamily: 'Lora',
            fontSize: '16px',
            background: 'white',
            fontWeight: '600',
            lineHeight: '150%',
            position: 'absolute',
            top: '60px',
            padding: '24px 36px',
            borderRadius: '8px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.05)',
          }}
        >
          <img style={{ marginRight: '14px' }} src="/img/vector.svg" alt="" />
          {t('header.idCopied')}
        </Box>
      ),
    });
  };
  return (
    <>
      <HeaderContainer open={toggle}>
        <div className="left">
          <Link to="/" className="logo_link">
            <img src="/img/logo.svg" alt="logo" className="logo" />
          </Link>

          {/* author */}
          {/* eslint-disable-next-line no-nested-ternary */}
          {account?.role === 2 ? (
            <>
              {/* <NavLink className="btn" to="/author/dashboard">
                {t('header.myStatistics')}
              </NavLink> */}
              <NavLink className="btn" to="/author/my-articles">
                {t('header.myPapers')}
              </NavLink>
              {/* <NavLink className="btn" to="/author/awards">
                Награды
              </NavLink> */}
              <NavLink className="btn" to="/settings">
                {t('header.settings')}
              </NavLink>
            </>
          ) : // eslint-disable-next-line no-nested-ternary
          account?.role === 4 ? (
            <>
              <NavLink className="btn" to="/validator/articles-for-review">
                {t('header.papersToBeReviewed')}
              </NavLink>
              {/* <NavLink className="btn" to="/validator/awards">
                {t('header.rewards')}
              </NavLink> */}
              <NavLink className="btn" to="/settings">
                {t('header.settings')}
              </NavLink>
            </>
          ) : account?.role === 1 ? (
            <>
              <NavLink className="btn" to="/my-library">
                {t('header.myLibrary')}
              </NavLink>
              {/* <NavLink className="btn" to="/article-transaction">
                {t('header.transactions')}
              </NavLink> */}
              <NavLink className="btn" to="/settings">
                {t('header.settings')}
              </NavLink>
            </>
          ) : (
            <>
              <NavLink className="btn" to="/library">
                {t('header.library')}
              </NavLink>
              {/* <NavLink className="btn" to="/about">
                О нас
              </NavLink> */}
              <NavLink className="btn" to="/help">
                {t('header.help')}
              </NavLink>
            </>
          )}
        </div>
        <div className="right">
          <Tooltip
            hasArrow
            label={t('header.library')}
            bg="#D890F0"
            padding="10px"
            marginTop="8px"
            fontFamily="Golos"
            borderRadius="6px"
          >
            <Link className="btn-library" to="/library">
              <img src="/img/book.svg" alt="" />
            </Link>
          </Tooltip>
          {account?.role === 2 ? (
            <>
              <Link className="create-btn" to="/author/create">
                <img src="/img/add-circle.svg" alt="" />
                {t('header.publishPaper')}
              </Link>
              {account?.user_rolerole <= 2 ? (
                <Link to="/select-validator" className="validator-btn">
                  {t('header.becomeReviewer')}
                </Link>
              ) : (
                ''
              )}
            </>
          ) : null}
          {account?.user_role === 1 ? (
            <span className="btn get_role_btn">
              <Link to="/select-author">{t('header.contributeAuthor')}</Link>/
              <Link to="/select-validator">
                {t('header.contributeReviewer')}
              </Link>
            </span>
          ) : (
            <UiSelect
              isActive={active}
              onClick={e => {
                e.stopPropagation();
                setActive(!active);
              }}
            >
              <div
                style={{
                  cursor: 'pointer',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <span className="langspan">
                  {/* {lan === "ru" ? "Руc" : "Eng"} */}
                  {lan === 'ru' ? 'Русский' : 'English'}
                </span>
                {active ? <Up /> : <Down />}
              </div>
              <ul>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <div onClick={() => onLanguageHandle('ru')}>
                  <span
                    //   onClick={() => onLanguageHandle("ru")}
                    style={{
                      display: 'flex',
                      justifyContent: 'left',
                      alignItems: 'center',
                    }}
                    className={lan === 'en' ? '' : 'activelanguage'}
                  >
                    {t('header.ruLang')}
                  </span>
                </div>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <div onClick={() => onLanguageHandle('en')}>
                  <span
                    //   onClick={() => onLanguageHandle("en")}
                    style={{ display: 'flex', justifyContent: 'left' }}
                    className={lan === 'en' ? 'activelanguage' : ''}
                  >
                    {t('header.engLang')}
                  </span>
                </div>
              </ul>
            </UiSelect>
          )}

          {walletData?.isConnect && isCorrectNetwork ? (
            <UiSelectwallet
              isActivewallet={activewallet}
              onClick={e => {
                e.stopPropagation();
                setActivewallet(!activewallet);
              }}
            >
              <span
                className="btn account btn-wallet"
                style={{ marginLeft: 10 }}
              >
                <img src="/img/avatar.svg" alt="wallet" />
                <div>
                  <div className="wallet_id">
                    {walletData?.accountAddress.slice(0, 5)}
                    ...
                    {walletData?.accountAddress.slice(-4)}
                  </div>
                  <div className="balance">
                    {walletData?.tokenBalance < 0
                      ? t('header.noToken')
                      : `${walletData?.tokenBalance} ${walletData?.tokenName}`}
                  </div>
                </div>
                <div style={{ marginLeft: '9px' }}>
                  {activewallet ? <Up /> : <Down />}
                </div>
              </span>
              <div className="walletoption">
                <div className="layer" />
                {/* <div className="cardmain">
                  <div className="cardmodal"></div>
                </div> */}
                <ul>
                  <div className="walletoption-items">
                    <h2>{t('header.myWallet')}</h2>
                    <div className="walletoption-item">
                      <div className="walletoption-item-acc">
                        <img src="/img/iconwallet.svg" alt="" />
                        <div className="walletoption-item-acc-text">
                          <p>
                            {walletData?.accountAddress.slice(0, 5)}
                            ...
                            {walletData?.accountAddress.slice(-4)}
                          </p>
                          <span>
                            {walletData?.tokenBalance < 0
                              ? t('header.noToken')
                              : `${walletData?.tokenBalance} ${walletData?.tokenName}`}
                          </span>
                        </div>
                      </div>
                      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                      <img
                        src="/img/copy.svg"
                        alt=""
                        onClick={() =>
                          copyToClipboard(walletData?.accountAddress)
                        }
                      />
                    </div>
                  </div>
                  <div className="walletoption-items">
                    <h2>{t('header.useSOWas')}</h2>
                    {account?.role === 1 ? (
                      <div className="walletoption-item">
                        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                        <div
                          className={
                            account?.user_role >= 1
                              ? 'walletoption-item-acc'
                              : 'walletoption-item-acc walletoption-item-passive'
                          }
                          onClick={() => {
                            if (account?.user_role >= 1) {
                              dispatch({ type: 'SET_ROLE', payload: 1 });
                              navigate('/');
                            }
                          }}
                        >
                          <img src="/img/user_avatar_1.svg" alt="" />
                          <p>{t('header.reader')}</p>
                        </div>
                        {account?.role === 1 ? (
                          <p className="current">{t('header.current')}</p>
                        ) : (
                          ''
                        )}
                      </div>
                    ) : (
                      ''
                    )}
                    {account?.role === 4 ? (
                      <div className="walletoption-item">
                        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                        <div
                          className={
                            account?.user_role >= 4
                              ? 'walletoption-item-acc'
                              : 'walletoption-item-acc walletoption-item-passive'
                          }
                          onClick={() => {
                            if (account?.user_role >= 4) {
                              dispatch({ type: 'SET_ROLE', payload: 4 });
                              navigate('/');
                            }
                          }}
                        >
                          <img src="/img/user_avatar_2.svg" alt="" />
                          <p>{t('header.reviewer')}</p>
                        </div>
                        {account?.role === 4 ? (
                          <p className="current">{t('header.current')}</p>
                        ) : (
                          ''
                          // <p className="under-review">на проверке</p>
                        )}
                      </div>
                    ) : (
                      ''
                    )}
                    {account?.role === 2 ? (
                      <div className="walletoption-item">
                        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                        <div
                          className={
                            account?.user_role >= 2
                              ? 'walletoption-item-acc'
                              : 'walletoption-item-acc walletoption-item-passive'
                          }
                          onClick={() => {
                            if (account?.user_role >= 2) {
                              dispatch({ type: 'SET_ROLE', payload: 2 });
                              navigate('/');
                            }
                          }}
                        >
                          <img src="/img/user_avatar_3.svg" alt="" />
                          <p>{t('header.author')}</p>
                        </div>
                        {account?.role === 2 ? (
                          <p className="current">{t('header.current')}</p>
                        ) : (
                          ''
                        )}
                      </div>
                    ) : (
                      ''
                    )}
                    {account?.role !== 1 ? (
                      <div className="walletoption-item">
                        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                        <div
                          className={
                            account?.user_role >= 1
                              ? 'walletoption-item-acc'
                              : 'walletoption-item-acc walletoption-item-passive'
                          }
                          onClick={() => {
                            if (account?.user_role >= 1) {
                              dispatch({ type: 'SET_ROLE', payload: 1 });
                              navigate('/');
                            }
                          }}
                        >
                          <img src="/img/user_avatar_1.svg" alt="" />
                          <p>{t('header.reader')}</p>
                        </div>
                        {account?.role === 1 ? (
                          <p className="current">{t('header.current')}</p>
                        ) : (
                          ''
                        )}
                      </div>
                    ) : (
                      ''
                    )}
                    {account?.role !== 4 ? (
                      <div className="walletoption-item">
                        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                        <div
                          className={
                            account?.user_role >= 4
                              ? 'walletoption-item-acc'
                              : 'walletoption-item-acc walletoption-item-passive'
                          }
                          onClick={() => {
                            if (account?.user_role >= 4) {
                              dispatch({ type: 'SET_ROLE', payload: 4 });
                              navigate('/');
                            }
                          }}
                        >
                          <img src="/img/user_avatar_2.svg" alt="" />
                          <p>{t('header.reviewer')}</p>
                        </div>
                        {account?.role === 4 ? (
                          <p className="current">{t('header.current')}</p>
                        ) : (
                          ''
                          // <p className="under-review">на проверке</p>
                        )}
                      </div>
                    ) : (
                      ''
                    )}
                    {account?.role !== 2 ? (
                      <div className="walletoption-item">
                        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                        <div
                          className={
                            account?.user_role >= 2
                              ? 'walletoption-item-acc'
                              : 'walletoption-item-acc walletoption-item-passive'
                          }
                          onClick={() => {
                            if (account?.user_role >= 2) {
                              dispatch({ type: 'SET_ROLE', payload: 2 });
                              navigate('/');
                            }
                          }}
                        >
                          <img src="/img/user_avatar_3.svg" alt="" />
                          <p>{t('header.author')}</p>
                        </div>
                        {account?.role === 2 ? (
                          <p className="current">{t('header.current')}</p>
                        ) : (
                          ''
                        )}
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="wallet-switch wallet">
                    <img src="/img/empty-wallet-change.svg" alt="" />
                    <p>{t('header.switchWallet')}</p>
                  </div>
                  {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                  <div
                    className="wallet-disable wallet"
                    onClick={() => {
                      logOut();
                    }}
                  >
                    <img src="/img/empty-wallet-remove.svg" alt="" />
                    <p>{t('header.disconnectWallet')}</p>
                  </div>
                </ul>
              </div>
            </UiSelectwallet>
          ) : (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <span
              className="btn account"
              onClick={() => {
                if (!isCorrectNetwork && walletData?.isConnect)
                  setAuthAction(3);
                openAuthModal(true);
              }}
              style={{ marginLeft: 10 }}
            >
              <img src="/img/wallet.svg" alt="wallet" />
              <span>
                {isCorrectNetwork
                  ? t('header.connectWallet')
                  : t('header.wrongNetwork')}
              </span>
            </span>
          )}
        </div>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          {toggle === true ? (
            <>
              <img
                style={{ cursor: 'pointer' }}
                src="/img/close-menu.svg"
                alt=""
                // onClick={() => toggleNav(!toggle)}
              />{' '}
            </>
          ) : (
            <>
              <Line open={toggle} />
              <Line open={toggle} />
              <Line open={toggle} />
            </>
          )}
        </NavIcon>
      </HeaderContainer>
      <Overlay open={toggle} account__role={account?.role}>
        <OverlayMenu open={toggle}>
          {/* eslint-disable-next-line no-nested-ternary */}
          {account?.role === 2 ? (
            <>
              {/* <Item>
                <NavLink className="btn" to="/author/dashboard">
                  {t('header.myStatistics')}
                </NavLink>
              </Item> */}
              <Item>
                <NavLink className="btn" to="/author/my-articles">
                  {t('header.myPapers')}
                </NavLink>
              </Item>
              {/* <Item>
                <NavLink className="btn" to="/author/awards">
                  Награды
                </NavLink>
              </Item> */}
              <Item>
                <NavLink className="btn" to="/settings-mobile">
                  {t('header.settings')}
                </NavLink>
              </Item>
            </>
          ) : // eslint-disable-next-line no-nested-ternary
          account?.role === 4 ? (
            <>
              <Item>
                <NavLink className="btn" to="/validator/articles-for-review">
                  {t('header.toBeReviewed')}
                </NavLink>
              </Item>
              {/* <Item>
                <NavLink className="btn" to="/validator/awards">
                  {t('header.rewards')}
                </NavLink>
              </Item> */}
              <Item>
                <NavLink className="btn" to="/settings-mobile">
                  {t('header.settings')}
                </NavLink>
              </Item>
            </>
          ) : account?.role === 1 ? (
            <>
              <Item>
                <NavLink className="btn" to="/my-library">
                  {t('header.myLibrary')}
                </NavLink>
              </Item>
              {/* <Item>
                <NavLink className="btn" to="/article-transaction">
                  {t('header.statistics')}
                </NavLink>
              </Item> */}
              <Item>
                <NavLink className="btn" to="/settings-mobile">
                  {t('header.settings')}
                </NavLink>
              </Item>
            </>
          ) : (
            <>
              <Item>
                <NavLink className="btn" to="/library">
                  {t('header.library')}
                </NavLink>
              </Item>
              {/* <Item>
                <NavLink className="btn" to="/about">
                  О нас
                </NavLink>
              </Item> */}
              <Item>
                <NavLink className="btn" to="/help">
                  {t('header.help')}
                </NavLink>
              </Item>
            </>
          )}
          <hr />
          <Item>
            <UiSelect
              isActive={active}
              onClick={e => {
                e.stopPropagation();
                setActive(!active);
              }}
            >
              <div
                style={{
                  cursor: 'pointer',
                  alignItems: 'center',
                  display: 'flex',
                  padding: '5px 0px',
                  justifyContent: 'space-between',
                }}
              >
                <span className="langspan">
                  {/* {lan === "ru" ? "Руc" : "Eng"} */}
                  {lan === 'ru' ? 'Русский' : 'English'}
                </span>
                {active ? <Up /> : <Down />}
              </div>
              <ul style={{ top: '15px', width: '100%' }}>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <div onClick={() => onLanguageHandle('ru')}>
                  <span
                    //   onClick={() => onLanguageHandle("ru")}
                    style={{
                      display: 'flex',
                      justifyContent: 'left',
                      alignItems: 'center',
                    }}
                    className={lan === 'en' ? '' : 'activelanguage'}
                  >
                    {t('header.ruLang')}
                  </span>
                </div>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <div onClick={() => onLanguageHandle('en')}>
                  <span
                    //   onClick={() => onLanguageHandle("en")}
                    style={{ display: 'flex', justifyContent: 'left' }}
                    className={lan === 'en' ? 'activelanguage' : ''}
                  >
                    {t('header.engLang')}
                  </span>
                </div>
              </ul>
            </UiSelect>
          </Item>

          <div className="wallet">
            {/* {
             walletData?.isConnect ? (
              <UiSelectwallet
              isActivewallet={activewallet}
              onClick={(e) => {
                e.stopPropagation();
                setActivewallet(!activewallet);
              }}
            >
              <span
                className="btn account "
                style={{ marginBottom: 10 }}
              >
                <img src="/img/avatar.svg" alt="wallet" />
                <div>
                  <div className="wallet_id">
                    {walletData?.accountAddress.slice(0, 5)}
                    ...
                    {walletData?.accountAddress.slice(-4)}
                  </div>
                  <div className="balance">
                    {walletData?.tokenBalance} {walletData?.tokenName}
                  </div>
                </div>
                <div style={{ marginLeft: "9px" }}>
                  {activewallet ? <Up /> : <Down />}
                </div>
              </span>

            </UiSelectwallet>
              ): null
            } */}
            {walletData?.isConnect && isCorrectNetwork ? (
              <>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <span
                  className="btn  btn-wallet"
                  onClick={() => setModalWallet(true)}
                >
                  <div className="wallet_target">
                    <img src="/img/avatar.svg" alt="wallet" />
                    <div>
                      <div className="wallet_id">
                        {walletData?.accountAddress.slice(0, 5)}
                        ...
                        {walletData?.accountAddress.slice(-4)}
                      </div>
                      <div className="balance">
                        {walletData?.tokenBalance < 0
                          ? t('header.noToken')
                          : `${walletData?.tokenBalance} ${walletData?.tokenName}`}
                      </div>
                    </div>
                  </div>
                  <div style={{ marginLeft: '9px' }}>
                    {activewallet ? <Up /> : <Down />}
                  </div>
                </span>
                {account?.user_role === 1 ? (
                  <span className="btn account">
                    <Link to="/select-author">
                      {t('header.contributeAuthor')}
                    </Link>
                    /
                    <Link to="/select-validator">
                      {t('header.contributeReviewer')}
                    </Link>
                  </span>
                ) : (
                  ''
                )}
              </>
            ) : (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
              <span
                className="btn account"
                onClick={() => {
                  if (!isCorrectNetwork && walletData?.isConnect)
                    setAuthAction(3);
                  openAuthModal(true);
                }}
              >
                <img src="/img/wallet.svg" alt="wallet" />
                <span>
                  {isCorrectNetwork
                    ? t('header.connectWallet')
                    : t('header.wrongNetwork')}
                </span>
              </span>
            )}
          </div>
        </OverlayMenu>
      </Overlay>
      {/* Bottom menu  */}
      <BottomMenu className="bottom-menu" account__role={account?.role}>
        <div className="bottom-menu-items">
          {/* eslint-disable-next-line no-nested-ternary */}
          {account?.role === 2 ? (
            <>
              {/* <NavLink className="bottom-menu-item" to={"/author/dashboard"}>
                <div className="bottom-menu-item-icon">
                  <div className="img">
                    <img
                      src="/img/dashboard_author_menu_validator.svg"
                      alt=""
                    />
                  </div>
                  <span>{t('header.statistics')}</span>
                </div>
              </NavLink> */}
              <NavLink className="bottom-menu-item" to="/author/my-articles">
                <div className="bottom-menu-item-icon">
                  <div className="img">
                    <img src="/img/my_article_author_menu_bottom.svg" alt="" />
                  </div>
                  <span>{t('header.myPapers')}</span>
                </div>
              </NavLink>
              <NavLink className="bottom-menu-item" to="/author/create">
                <div className="bottom-menu-item-icon">
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <div className="create">+</div>
                  </div>
                  <span>{t('header.create')}</span>
                </div>
              </NavLink>
              <NavLink className="bottom-menu-item" to="/settings-mobile">
                <div className="bottom-menu-item-icon">
                  <div className="img">
                    <img src="/img/setting_bottom_menu.svg" alt="" />
                  </div>
                  <span>{t('header.settings')}</span>
                </div>
              </NavLink>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <div
                className={
                  modalwallet === true
                    ? 'bottom-menu-item '
                    : 'bottom-menu-item'
                }
                onClick={() => setModalWallet(true)}
              >
                <div className="bottom-menu-item-icon">
                  <div className="img">
                    <img src="/img/bottom_menu_avatar.svg" alt="" />
                  </div>
                  <span>{t('header.myWallet')}</span>
                </div>
              </div>
            </>
          ) : // eslint-disable-next-line no-nested-ternary
          account?.role === 4 ? (
            <>
              <NavLink
                className="bottom-menu-item"
                to="/validator/articles-for-review"
              >
                <div className="bottom-menu-item-icon">
                  <div className="img">
                    <img src="/img/awards_menu_bottom.svg" alt="" />
                  </div>
                  <span>{t('header.toBeReviewed')}</span>
                </div>
              </NavLink>
              {/* <NavLink className="bottom-menu-item" to={"/validator/awards"}>
                <div className="bottom-menu-item-icon">
                  <div className="img">
                    <img src="/img/awards_menu_bottom.svg" alt="" />
                  </div>
                  <span>{t('header.rewards')}</span>
                </div>
              </NavLink> */}
              <NavLink className="bottom-menu-item" to="/settings-mobile">
                <div className="bottom-menu-item-icon">
                  <div className="img">
                    <img src="/img/setting_bottom_menu.svg" alt="" />
                  </div>
                  <span>{t('header.settings')}</span>
                </div>
              </NavLink>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <div
                className={
                  modalwallet === true
                    ? 'bottom-menu-item '
                    : 'bottom-menu-item'
                }
                onClick={() => setModalWallet(true)}
              >
                <div className="bottom-menu-item-icon">
                  <div className="img">
                    <img src="/img/bottom_menu_avatar.svg" alt="" />
                  </div>
                  <span>{t('header.myWallet')}</span>
                </div>
              </div>
            </>
          ) : account?.role === 1 ? (
            <>
              <NavLink className="bottom-menu-item" to="/my-library">
                <div className="bottom-menu-item-icon">
                  <div className="img">
                    <img src="/img/my_article_author_menu_bottom.svg" alt="" />
                  </div>
                  <span>{t('header.myLibrary')}</span>
                </div>
              </NavLink>
              {/* <NavLink className="bottom-menu-item" to={"/article-transaction"}>
                <div className="bottom-menu-item-icon">
                  <div className="img">
                    <img src="/img/awards_menu_bottom.svg" alt="" />
                  </div>
                  <span>{t('header.statistics')}</span>
                </div>
              </NavLink> */}
              <NavLink className="bottom-menu-item" to="/settings-mobile">
                <div className="bottom-menu-item-icon">
                  <div className="img">
                    <img src="/img/setting_bottom_menu.svg" alt="" />
                  </div>
                  <span>{t('header.settings')}</span>
                </div>
              </NavLink>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <div
                className={
                  modalwallet === true
                    ? 'bottom-menu-item '
                    : 'bottom-menu-item'
                }
                onClick={() => setModalWallet(true)}
              >
                <div className="bottom-menu-item-icon">
                  <div className="img">
                    <img src="/img/bottom_menu_avatar.svg" alt="" />
                  </div>
                  <span>{t('header.myWallet')}</span>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </BottomMenu>
      <ModalWalletMobile
        modalwallet={modalwallet}
        setModalWallet={setModalWallet}
        walletData={walletData}
        account={account}
        logOut={logOut}
        copyToClipboard={copyToClipboard}
      />

      <FillYourProfile />
    </>
  );
};
export default Header;
