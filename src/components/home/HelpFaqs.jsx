import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SettingsBar from '../settings/SettingsBar';
import HelpBar from './HelpBar';
import { HelpContainer } from '../../styleComponents/home/HelpStyle';
import Faq from '../../sections/homeSections/Faq';
import { FaqContainer } from '../../styleComponents/home/FaqStyle';
import { BottomMenu } from '../../styleComponents/layout/BottomMenu';

const faqs = [
  {
    name: 'Как именно работает система публикации статей на seaofwisdom.xyz?',
    text: 'Когда ученый хочет опубликовать свою работу, он загружает ее на платформу seaofwisdom.xyz. Вместе с публикацией создается уникальный NFT, который подтверждает авторство статьи. После этого рецензенты проводят рецензирование, а результаты рецензии записываются в блокчейн. Все эти данные доступны общественности, что добавляет прозрачности процессу.',
  },
  {
    name: 'Как процесс рецензирования статей обеспечивает открытость и прозрачность?',
    text: 'Каждая рецензия сохраняется в блокчейне, что означает, что она становится навсегда привязанной к конкретной статье. Благодаря блокчейну, можно легко увидеть кто, когда и какую рецензию оставил для данной статьи. Это обеспечивает прозрачность и позволяет избежать скрытых манипуляций.',
  },
  {
    name: 'Как авторы и рецензенты получают вознаграждения?',
    text: 'Вознаграждения выплачиваются автоматически благодаря смарт-контрактам на блокчейне. Авторы получают награды за публикации, которые подтверждаются их NFT. Рецензенты получают награды за качественные рецензии, аналогично тому, как валидаторы в блокчейне получают награды за подтверждение блоков.',
  },
  {
    name: 'Как можно получить доступ к статьям?',
    text: 'Читатели могут получить доступ к высококачественным статьям за небольшую плату. Эта система не только обеспечивает компенсацию для авторов и рецензентов, но и поддерживает поддержание высокого качества контента.',
  },
  {
    name: 'Как работает процесс диспутов с авторами?',
    text: 'Платформа предусматривает возможность вступить в диспут с автором по результатам работы. Это может быть использовано, если читатель имеет существенные замечания по поводу исследования или его результатов. Вся переписка по диспуту также сохраняется в блокчейне, обеспечивая прозрачность и возможность отслеживания хода диспута.',
  },
  {
    name: 'Что такое NFT и как он используется на платформе?',
    text: 'NFT или Non-Fungible Token - это специальный тип криптографического токена на блокчейн-сети, который представляет собой уникальный актив или цифровой товар. На нашей платформе авторы используют NFT для подтверждения авторства своих работ.',
  },
  {
    name: 'В какой сети работает платформа seaofwisdom.xyz?',
    text: 'В настоящее время, смарт-контракты платформы развернуты в тестовой сети Binance Smart Chain (BSC). В будущем, мы планируем развернуть смарт-контракты на Ethereum, что обеспечит еще большую безопасность и прозрачность транзакций.',
  },
  {
    name: 'Каким образом будет подтверждаться репутация рецензентов на платформе?',
    text: 'Для того чтобы стать рецензентом, потребуется пройти процесс верификации, который поможет убедиться в компетентности и надежности пользователя. В дополнение к этому, будет создан SBT (Soul Bounded Token). Это уникальный токен, связанный с каждым пользователем, который будет отражать его репутацию и вклад в платформу. Это позволит нам учитывать историю взаимодействия рецензента с платформой, включая качество проведенных рецензий и общую активность, обеспечивая таким образом большую ответственность и доверие в процессе рецензирования.',
  },
];

const HelpFaqs = () => {
  const [active, setActive] = useState(-1);

  return (
    <div>
      <HelpBar>
        <HelpContainer>
          <div className="help-about">
            <div className="about-items">
              <h4>Часто задаваемые вопросы</h4>
              <div className="title_p">
                Sea of Wisdom расширяет научный опыт для всех заинтересованных
                сторон. Откройте новую эру академической прозрачности и равного
                доступа к знаниям с помощью нашего инновационного проекта.
              </div>
            </div>
          </div>
          <div className="faqs-help">
            <div className="faq">
              <div className="faqs">
                <div className="items">
                  {faqs.map((item, index) => (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                    <div
                      className={
                        active === `${index}faq1` ? 'item active' : 'item'
                      }
                      key={Math.random() * Date.now()}
                      onClick={() => {
                        setActive(
                          active === `${index}faq1` ? -1 : `${index}faq1`
                        );
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
              </div>
            </div>
          </div>
        </HelpContainer>
      </HelpBar>
      <div className="mobile">
        <HelpContainer>
          <div className="help-about">
            <div className="about-items">
              <h4>Часто задаваемые вопросы</h4>
              <div className="title_p">
                Sea of Wisdom расширяет научный опыт для всех заинтересованных
                сторон. Откройте новую эру академической прозрачности и равного
                доступа к знаниям с помощью нашего инновационного проекта.
              </div>
            </div>
          </div>
          <div className="faqs-help">
            <div className="faq">
              <div className="faqs">
                <div className="items">
                  {faqs.map((item, index) => (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                    <div
                      className={
                        active === `${index}faq1` ? 'item active' : 'item'
                      }
                      key={Math.random() * Date.now()}
                      onClick={() => {
                        setActive(
                          active === `${index}faq1` ? -1 : `${index}faq1`
                        );
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
              </div>
            </div>
          </div>
        </HelpContainer>
      </div>
      <BottomMenu account__role={85}>
        <div className="bottom-menu-items">
          <NavLink className="bottom-menu-item" to="/about" end>
            <div className="bottom-menu-item-icon-help">
              <div className="img">
                <img src="/img/about__book__icons.svg" alt="" />
              </div>
              <span>О нас</span>
            </div>
          </NavLink>
          <NavLink className="bottom-menu-item" to="/about/faq" end>
            <div className="bottom-menu-item-icon-help">
              <div className="img">
                <img src="/img/help_s.svg" alt="" />
              </div>
              <span>Часто задаваемые вопросы</span>
            </div>
          </NavLink>
        </div>
      </BottomMenu>
    </div>
  );
};

export default HelpFaqs;
