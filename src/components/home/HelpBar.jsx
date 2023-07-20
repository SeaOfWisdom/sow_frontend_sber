import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SettingsContainer } from '../../styleComponents/settings/SettingsStyle';
import { SettingsMobileContainer } from '../../styleComponents/settings/SettingMobileStyle';

const HelpBar = ({ children }) => (
  // const { account } = useSelector((s) => s);
  <SettingsContainer>
    <div className="s_container_help">
      <div className="s_card">
        <div className="bar">
          <div className="title">Помощь</div>
          <div className="links">
            <NavLink to="/help" className="link" end>
              <img src="/img/about__book__icons.svg" alt="" />О нас
            </NavLink>
            <NavLink to="/help/faqs" className="link">
              <img src="/img/help_s.svg" alt="" />
              Часто задаваемые вопросы
            </NavLink>
          </div>
        </div>
        <div className="section_about">{children}</div>
      </div>
    </div>
  </SettingsContainer>
);
export default HelpBar;
