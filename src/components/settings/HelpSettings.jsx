import { useState } from "react";
import { HelpSettingsContainer } from "../../styleComponents/settings/HelpSettingsStyle";
import Layout from "../Layout";
import SettingsBar from "./SettingsBar";
import { HelpSettingsMobileContainer } from "../../styleComponents/settings/SettingMobileStyle";
import { useTranslation } from 'react-i18next';


const HelpSettings = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const faqs = t('help_settings.faqs', { returnObjects: true });
  return (
    <>
      <Layout>
        <SettingsBar>
          <HelpSettingsContainer>
            <div className="htitle">{t('help_settings.contactsTitle')}</div>
            <div className="hdesc">
               {t('help_settings.contactsDesc')}
            </div>
            <div className="hbtns">
              <a
                href="https://t.me/seaofwisdom"
                target="_blank"
                className="btn"
              >
                <img src="/img/telegram.svg" />
                 {t('help_settings.telegramBot')}
              </a>
              <button className="btn">
                <img src="/img/sms.svg" />
                sow_support@gmail.com
              </button>
            </div>
            <div className="help">{t('help_settings.frequentlyAskedQuestions')}</div>
            <div className="items">
              {faqs.map((item, index) => (
                <div
                  className={active === index ? "item active" : "item"}
                  key={index}
                  onClick={() => {
                    setActive(active === index ? -1 : index);
                  }}
                >
                  <div className="ftitle">
                    <h4>{item?.name}</h4>
                    <span className="btn">
                      {" "}
                      <img src="/img/bottom.svg" alt="bottom" />{" "}
                    </span>
                  </div>
                  <div className="text">{item?.text}</div>
                </div>
              ))}
            </div>
          </HelpSettingsContainer>
        </SettingsBar>
      </Layout>
    </>
  );
};
export default HelpSettings;
