import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Progress, Stack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FillYourProfileStyle } from '../../styleComponents/layout/FillYourProfileStyle';
import Axios from '../../utils/httpClient';

const FillYourProfile = () => {
  const [activefillyourprofile, setActiveFillYourProfile] = useState(false);
  const { account, walletData } = useSelector(s => s);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const fields = [
    {
      name: 'middlename',
      title: 'Добавьте отчество',
      description: 'Добавьте отчество, чтобы отображать ваше полное Ф.И.О.',
      roles: [2, 4],
    },
    {
      name: 'language',
      title: 'Выберите язык на котором Вы пишете',
      description: 'Добавьте Выберите язык на котором Вы пишете',
      roles: [2, 4],
    },
    {
      name: 'scholar_ship_profile',
      title: 'Google Scholar Профиль',
      description: 'Добавьте Google Scholar Профиль',
      roles: [2],
    },
    {
      name: 'orcid',
      title: 'ORCID',
      description: 'Добавьте ORCID',
      roles: [2, 4],
    },
  ];
  const calckFillPercent = fillAccount => {
    if (walletData?.accountAddress) {
      let p = 0;
      let tp = 0;
      fields
        .filter(f => f.roles.includes(account?.role))
        .forEach(item => {
          if (get(fillAccount, item?.name, '')) {
            p += 1;
          }
          tp += 1;
        });
      // eslint-disable-next-line
      return parseInt((p * 100) / tp);
    }
    return -1;
  };

  const getAuthorData = () => {
    // dispatch({ type: "SET_LOADING", payload: true });
    Axios()
      .get(`/author_info/${walletData?.accountAddress}`)
      .then(res => {
        dispatch({
          type: 'SET_ACCOUNT',
          payload: { ...res?.data?.basic_info, ...res?.data?.author_info },
        });
      })
      .finally(() => {
        // dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch(r => {});
  };
  const getValidatorData = () => {
    // dispatch({ type: "SET_LOADING", payload: true });
    Axios()
      .get(`/validator_info/${walletData?.accountAddress}`)
      .then(res => {
        dispatch({
          type: 'SET_ACCOUNT',
          payload: { ...res?.data?.basic_info, ...res?.data?.validator_info },
        });
      })
      .finally(() => {
        // dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch(r => {});
  };

  useEffect(() => {
    if (walletData?.accountAddress && !account?.middlename) {
      if (account?.role === 4) {
        getValidatorData();
      } else if (account?.role === 2) {
        getAuthorData();
      }
    }
  }, [walletData?.accountAddress, account?.role]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {(account?.role === 4 || account?.role === 2) &&
      calckFillPercent(account) >= 0 &&
      calckFillPercent(account) < 100 ? (
        <FillYourProfileStyle isActive={activefillyourprofile}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            className="fill_you_profile"
            onClick={() => setActiveFillYourProfile(!activefillyourprofile)}
          >
            <img src="/img/user_hand_up.svg" alt="" />
            <div className="text">
              <p>{t('header.profileFilledTo')}</p>
              <div className="percentage">{calckFillPercent(account)}%</div>
            </div>
            <Stack spacing={5}>
              <Progress size="sm" value={calckFillPercent(account)} />
            </Stack>
          </div>
          <div>
            <div className="modal">
              {fields
                .filter(f => f.roles.includes(account?.role))
                .map(item => (
                  <div className="add-table" key={Math.random() * Date.now()}>
                    {get(account, item?.name, '') ? (
                      <>
                        <img src="/img/vector.svg" alt="" />
                        <div className="add not">
                          <div className="add-items">
                            <h5>{item?.title}</h5>
                            <p>{item?.description}</p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <img src="/img/ellipse_7.svg" alt="" />
                        <div className="add">
                          <div className="add-items">
                            <h5>{item?.title}</h5>
                            <p>{item?.description}</p>
                          </div>
                          <Link to="/settings" className="btn">
                            {t('header.add')}
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                ))}
            </div>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div
              className="close"
              onClick={() => setActiveFillYourProfile(!activefillyourprofile)}
            >
              <img src="/img/close-4_1.svg" alt="" />
            </div>
          </div>
        </FillYourProfileStyle>
      ) : (
        ''
      )}
    </>
  );
};
export default FillYourProfile;
