import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Faq from '../../sections/homeSections/Faq';
import Navigation from '../../sections/utils/Navigation';
import { HelpContainer } from '../../styleComponents/home/HelpStyle';
import SettingsBar from '../settings/SettingsBar';
import { TeacherAccountContainer } from '../../styleComponents/settings/TeacherAccountStyle';
import HelpBar from './HelpBar';

const Help = () => {
  const { t, i18n } = useTranslation();

  return (
    <HelpBar>
      <TeacherAccountContainer>
        <div className="title">{t('help.editAccount')}</div>
      </TeacherAccountContainer>
    </HelpBar>
  );
};
export default Help;
