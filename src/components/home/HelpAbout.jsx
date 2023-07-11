import React, { useState } from "react";
import SettingsBar from "../settings/SettingsBar";
import HelpBar from "./HelpBar";
import Layout from "../Layout";
import { HelpContainer } from "../../styleComponents/home/HelpStyle";
import { Link, NavLink } from "react-router-dom";
import { BottomMenu } from "../../styleComponents/layout/BottomMenu";
import ModalCreateArticle from "../author/ModalCreateArticle";
import ModalHelp from "../../sections/layout/ModalHelp";
import { useTranslation } from 'react-i18next';


const HelpAbout = () => {
  const { t, i18n } = useTranslation();
  const [activeModal, setActiveModal] = useState(false);
  const card = [
    {
      id: 1,
      img: "/img/decentralized_1.svg",
      title:
          t('help_about.intro'),
    },
    {
      id: 2,
      img: "/img/blockchain-3_2.svg",
      title:
        t('help_about.advantage'),
    },
    {
      id: 3,
      img: "/img/coins-2_1.svg",
      title:
        t('help_about.actionsRewards'),
    },
  ];
  return (
    <div>
      {console.log(activeModal, "activem")}
      <Layout>
        <HelpBar>
          <HelpContainer>
            <div className="help-about">
              <div className="about-items">
                <h4>{t('help_about.aboutUs')}</h4>
                <div className="title_p">
                  {t('help_about.sowDesc')}
                </div>
                <div className="about-item">
                  <div className="cards">
                    {card.map((item) => (
                      <>
                        <div className="card" key={item?.id}>
                          <img src={item?.img} alt="" />
                          <div className="title_card">{item?.title}</div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="about-items">
                <h4>{t('help_about.howIsSolved')}</h4>
                <div className="about-item">
                  <div className="banner-img">
                    <img
                      src="/img/about__banner.png"
                      className="banner-img__img"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="about-items">
                <div className="cards-2">
                  <div className="card">
                    <div className="number">5</div>
                    <div className="title">
                      {t('help_about.talentedAndReliableAuthors')}
                    </div>
                  </div>
                  <div className="card">
                    <div className="number">15</div>
                    <div className="title">{t('help_about.publishedPapers')}</div>
                  </div>
                  <div className="card">
                    <div className="number">3</div>
                    <div className="title">{t('help_about.professionalReviewers')}</div>
                  </div>
                </div>
              </div>
              <div className="about-items">
                <h4>{t('help_about.outTeam')}</h4>
                <div className="about-item">
                  <div className="cards-command">
                    <div className="card">
                      <div className="team-avatar">
                        <img src="/img/author_avatar.svg" alt="" />
                        <div className="about">
                          <div className="name">{t('help_about.ivanIvanovich')}</div>
                          <div className="skills">
                            <div className="skill">{t('help_about.coFounder')}</div>
                            <div className="skill">{t('help_about.ceo')}</div>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        {t('help_about.aboutIvanIvanovich')}
                      </div>
                    </div>
                    <div className="card">
                      <div className="team-avatar">
                        <img src="/img/author_avatar.svg" alt="" />
                        <div className="about">
                          <div className="name">{t('help_about.petrPetrovich')}</div>
                          <div className="skills">
                            <div className="skill">{t('help_about.coFounder')}</div>
                            <div className="skill">{t('help_about.cto')}</div>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        {t('help_about.aboutPetrPetrovich')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="help">
                <div className="help_card">
                  <div className="text">
                    <h1>{t('help_about.contactUs')}</h1>
                    <div className="desc">
                      {t('help_about.contactUsEmailTg')}
                    </div>
                    <div className="btns">
                      <Link
                        to="https://t.me/seaofwisdom"
                        target="_blank"
                        className="btn telegram"
                      >
                        <img src="/img/telegram.svg" alt="" />
                        {t('help_about.tgBot')}
                      </Link>
                      <span className="btn mail">
                        <img src="/img/sms.svg" alt="" />
                        sow_support@gmail.com
                      </span>
                    </div>
                  </div>
                  <div className="img_target">
                    <img src="/img/help.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </HelpContainer>
        </HelpBar>
        <div className="mobile">
          <HelpContainer>
            <div className="help-about">
              <div className="about-items">
                <h4>{t('help_about.aboutUs')}</h4>
                <div className="title_p">
                  {t('help_about.sowDesc')}
                </div>
                <div className="about-item">
                  <div className="cards">
                    {card.map((item) => (
                      <>
                        <div className="card" key={item?.id}>
                          <img src={item?.img} alt="" />
                          <div className="title_card">{item?.title}</div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="about-items">
                <h4>{t('help_about.howIsSolved')}</h4>
                <div className="about-item">
                  <div className="banner-img">
                    <img src="/img/about__banner.png" alt="" />
                    <img
                      src="/img/zoom-in_1.svg"
                      alt=""
                      className="zoom_img"
                      onClick={() => setActiveModal(true)}
                    />
                  </div>
                </div>
              </div>
              <div className="about-items">
                <div className="cards-2">
                  <div className="card">
                    <div className="number">5</div>
                    <div className="title">
                      {t('help_about.talentedAndReliableAuthors')}
                    </div>
                  </div>
                  <div className="card">
                    <div className="number">15</div>
                    <div className="title">{t('help_about.publishedPapers')}</div>
                  </div>
                  <div className="card">
                    <div className="number">3</div>
                    <div className="title">{t('help_about.professionalReviewers')}</div>
                  </div>
                </div>
              </div>
              <div className="about-items">
                <h4>{t('help_about.ourTeam')}</h4>
                <div className="about-item">
                  <div className="cards-command">
                    <div className="card">
                      <div className="team-avatar">
                        <img src="/img/comand_img1.png" alt="" />
                        <div className="about">
                          <div className="name">{t('help_about.ivanIvanovich')}</div>
                          <div className="skills">
                            <div className="skill">{t('help_about.coFounder')}</div>
                            <div className="skill">{t('help_about.ceo')}</div>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        {t('help_about.aboutIvanIvanovich')}
                      </div>
                    </div>
                    <div className="card">
                      <div className="team-avatar">
                        <img src="/img/command_img2.png" alt="" />
                        <div className="about">
                          <div className="name">{t('help_about.petrPetrovich')}</div>
                          <div className="skills">
                            <div className="skill">{t('help_about.coFounder')}</div>
                            <div className="skill">{t('help_about.cto')}</div>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        {t('help_about.aboutPetrPetrovich')}.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="help">
                <div className="help_card">
                  <div className="text">
                    <h1>{t('help_about.contactUs')}</h1>
                    <div className="desc">
                      {t('help_about.contactUsEmailTg')}
                    </div>
                    <div className="btns">
                      <Link
                        to="https://t.me/seaofwisdom"
                        target="_blank"
                        className="btn telegram"
                      >
                        <img src="/img/telegram.svg" alt="" />
                        {t('help_about.tgBot')}
                      </Link>
                      <span className="btn mail">
                        <img src="/img/sms.svg" alt="" />
                        sow_support@gmail.com
                      </span>
                    </div>
                  </div>
                  <div className="img_target">
                    <img src="/img/help.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </HelpContainer>
          {activeModal === true ? (
            <>
              <ModalHelp isOpen={activeModal} onOpen={setActiveModal}>
                <img src="/img/modal_help.svg" alt="" />
              </ModalHelp>
            </>
          ) : (
            <></>
          )}
        </div>
      </Layout>

      <BottomMenu account__role={85}>
        <div className="bottom-menu-items">
          <NavLink className="bottom-menu-item" to={"/help"} end={true}>
            <div className="bottom-menu-item-icon-help">
              <div className="img">
                <img src="/img/about__book__icons.svg" alt="" />
              </div>
              <span>{t('help_about.aboutUs')}</span>
            </div>
          </NavLink>
          <NavLink className="bottom-menu-item" to={"/help/faqs"} end={true}>
            <div className="bottom-menu-item-icon-help">
              <div className="img">
                <img src="/img/help_s.svg" alt="" />
              </div>
              <span>{t('help_about.frequentlyAskedQuestions')}</span>
            </div>
          </NavLink>
        </div>
      </BottomMenu>
    </div>
  );
};

export default HelpAbout;
