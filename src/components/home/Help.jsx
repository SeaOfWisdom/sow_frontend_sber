import { Link } from "react-router-dom";
import Faq from "../../sections/homeSections/Faq";
import Navigation from "../../sections/utils/Navigation";
import { HelpContainer } from "../../styleComponents/home/HelpStyle";
import Layout from "../Layout";
import SettingsBar from "../settings/SettingsBar";
import { TeacherAccountContainer } from "../../styleComponents/settings/TeacherAccountStyle";
import HelpBar from "./HelpBar";
import { useTranslation } from 'react-i18next';


const Help = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Layout>
        <HelpBar>
          <TeacherAccountContainer>
            <div className="title">{t('help.editAccount')}</div>
          </TeacherAccountContainer>
        </HelpBar>
        
      </Layout>
    </>
  );
};
export default Help;
