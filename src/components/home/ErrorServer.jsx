import { Link } from "react-router-dom"
import Layout from "../Layout"
import { ErrorServerContainer } from "../../styleComponents/home/ErrorServerSytle"

const ErrorServer = () => {
    return(<>
    <Layout footer__show={false}>
    <ErrorServerContainer>
        <div className="ncard">
            <img src='/img/500.svg' alt="ErrorServer"/>
            <h1>Ошибка 50X</h1>
            <div className="desc">
            Что-то произошло на сервере. Обновите страницу. Просим прощения за предоставленные неудобства.
            </div>
            <Link to='/' className="btn">Обновить</Link>
        </div>
    </ErrorServerContainer>
    </Layout>
    </>)
}
export default ErrorServer