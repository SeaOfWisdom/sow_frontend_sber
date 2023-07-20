import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { SettingsContainer } from '../../styleComponents/settings/SettingsStyle';
import { SettingsMobileContainer } from '../../styleComponents/settings/SettingMobileStyle';

const SettingsBar = ({ children }) => {
  const { t, i18n } = useTranslation();
  const { account } = useSelector(s => s);
  return (
    // eslint-disable-next-line
    <>
      <SettingsContainer>
        <div className="s_container">
          <div className="s_card">
            <div className="bar">
              <div className="title">{t('settings_bar.settings')}</div>
              <div className="links">
                {/* eslint-disable-next-line no-nested-ternary */}
                {account?.role === 1 ? (
                  <NavLink to="/settings" className="link" end>
                    <img src="/img/user-edit.svg" alt="" />
                    {t('settings_bar.editAccount')}
                  </NavLink>
                ) : // eslint-disable-next-line no-nested-ternary
                account?.role === 2 ? (
                  <NavLink to="/settings" className="link" end>
                    <img src="/img/user-edit.svg" alt="" />
                    {t('settings_bar.editAccount')}
                  </NavLink>
                ) : account?.role === 4 ? (
                  <NavLink to="/settings" className="link" end>
                    <img src="/img/user-edit.svg" alt="" />
                    {t('settings_bar.editAccount')}
                  </NavLink>
                ) : (
                  ''
                )}
                <NavLink to="/settings/mail" className="link">
                  <img src="/img/sms-edit.svg" alt="" />
                  {t('settings_bar.editEmail')}
                </NavLink>
                <NavLink to="/settings/help" className="link">
                  <img src="/img/help_s.svg" alt="" />
                  {t('settings_bar.help')}
                </NavLink>
              </div>
            </div>
            <div className="section">{children}</div>
          </div>
        </div>
      </SettingsContainer>
    </>
  );
};
export default SettingsBar;
