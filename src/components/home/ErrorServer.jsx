import { Link } from 'react-router-dom';
import { ErrorServerContainer } from '../../styleComponents/home/ErrorServerSytle';

const ErrorServer = () => (
  <ErrorServerContainer>
    <div className="ncard">
      <img src="/img/500.svg" alt="ErrorServer" />
      <h1>Ошибка 50X</h1>
      <div className="desc">
        Что-то произошло на сервере. Обновите страницу. Просим прощения за
        предоставленные неудобства.
      </div>
      <Link to="/" className="btn">
        Обновить
      </Link>
    </div>
  </ErrorServerContainer>
);
export default ErrorServer;
