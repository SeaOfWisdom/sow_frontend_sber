import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SettingsMobileContainer } from '../../styleComponents/settings/SettingMobileStyle';
import Modal from '../../sections/layout/Modal';
import ModalDate from '../../sections/homeSections/ModalDate';
import ModalEmail from '../../styleComponents/settings/ModalEmail';
import ModalSetting from './ModalSetting';
import ModalSmsNumber from '../../styleComponents/settings/ModalSmsNumber';
import ModalAccount from './ModalAccount';

const SettingsMobile = () => {
  const { t, i18n } = useTranslation();
  const { account } = useSelector(s => s);
  const [openModalEmail, setModalOpenEmail] = useState(false);
  const [showSmsNumber, SetShowSmsNumber] = useState(false);
  const [accountModal, SetAccountModal] = useState(false);
  const [tab, setTab] = useState(0);

  const HandleModal = () => {
    setTab(1);
    setModalOpenEmail(true);
  };
  return (
    <div>
      <SettingsMobileContainer>
        <div className="s_container">
          <div className="links">
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div className="link" onClick={() => SetAccountModal(true)}>
              <img src="/img/user-edit.svg" alt="" />
              {t('edit_account.editAccount')}
            </div>

            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div className="link" onClick={HandleModal}>
              <img src="/img/sms-edit.svg" alt="" />
              {t('edit_account.editEmail')}
            </div>
            <NavLink className="link" to="/settings/help-mobile">
              <img src="/img/help_s.svg" alt="" />
              {t('edit_account.help')}
            </NavLink>
          </div>
        </div>
      </SettingsMobileContainer>
      <ModalSetting
        isOpen={accountModal}
        onOpen={SetAccountModal}
        // header="Редактировать аккаунт"
      >
        <ModalAccount setmodal={SetAccountModal} />
      </ModalSetting>
      {/* eslint-disable-next-line no-nested-ternary */}
      {tab === 1 ? (
        <ModalSetting isOpen={openModalEmail} onOpen={setModalOpenEmail}>
          <ModalEmail
            setmodal={setModalOpenEmail}
            setTab={setTab}
            setmodasms={SetShowSmsNumber}
          />
        </ModalSetting>
      ) : tab === 2 ? (
        <ModalSetting isOpen={showSmsNumber} onOpen={SetShowSmsNumber}>
          <ModalSmsNumber setmodal={SetShowSmsNumber} />
        </ModalSetting>
      ) : null}
    </div>
  );
};

export default SettingsMobile;
