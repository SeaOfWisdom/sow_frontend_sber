import { MissionContainer } from "../../styleComponents/home/MissionStyle";
import { useTranslation } from 'react-i18next';

const Mission = () => {
    const { t } = useTranslation();

    return(<>
    <MissionContainer>
        <div className="mission">
            <div className="title">
                <h2>{t('mission.title')}</h2>
            </div>
            <div className="subject">
                <div className="row">
                    <div className="star">
                        <img src="/img/star.svg" alt="star" />
                    </div>
                    <div  className="text">
                        <h4>{t('mission.ourMission.heading')}</h4>
                        <p>{t('mission.ourMission.description')}</p>
                    </div>
                </div>
                <div  className="row">
                    <div className="star">
                        <img src="/img/star.svg" alt="star" />
                    </div>
                    <div className="text">
                        <h4>{t('mission.aboutProject.heading')}</h4>
                        <p>{t('mission.aboutProject.description')}</p>
                    </div>
                </div>
            </div>

        </div>
    </MissionContainer>
    </>)
}
export default Mission;
