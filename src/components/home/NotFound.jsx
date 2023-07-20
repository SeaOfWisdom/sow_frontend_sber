import { Link } from 'react-router-dom';
import { NotFoundContainer } from '../../styleComponents/home/NotFoundSytle';

const NotFound = () => (
  <NotFoundContainer>
    <div className="ncard">
      <img src="/img/404.svg" alt="NotFound" />
      <h1>Страница не найдена</h1>
      <div className="desc">
        Данная страница не найдена. Перейдите на главную страницу, чтобы
        использовать все преимущества нашей системы.
      </div>
      <Link to="/" className="btn">
        На главную
      </Link>
    </div>
  </NotFoundContainer>
);
export default NotFound;
