import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HelpSettingsContainer } from '../../styleComponents/settings/HelpSettingsStyle';
import SettingsBar from './SettingsBar';

const HelpSettings = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const faqs = t('help_settings.faqs', { returnObjects: true });
  return (
    <SettingsBar>
      <HelpSettingsContainer>
        <div className="htitle">{t('help_settings.contactsTitle')}</div>
        <div className="hdesc">{t('help_settings.contactsDesc')}</div>
        <div className="hbtns">
          <a
            href="https://t.me/seaofwisdom"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            <img src="/img/telegram.svg" alt="telegram" />
            {t('help_settings.telegramBot')}
          </a>
          <button type="button" className="btn">
            <img src="/img/sms.svg" alt="sms" />
            sow_support@gmail.com
          </button>
        </div>
        <div className="help">
          {t('help_settings.frequentlyAskedQuestions')}
        </div>
        <div className="items">
          {faqs.map((item, index) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <div
              className={active === index ? 'item active' : 'item'}
              key={Math.random() * Date.now()}
              onClick={() => {
                setActive(active === index ? -1 : index);
              }}
            >
              <div className="ftitle">
                <h4>{item?.name}</h4>
                <span className="btn">
                  {' '}
                  <img src="/img/bottom.svg" alt="bottom" />{' '}
                </span>
              </div>
              <div className="text">{item?.text}</div>
            </div>
          ))}
        </div>
      </HelpSettingsContainer>
    </SettingsBar>
  );
};
export default HelpSettings;
