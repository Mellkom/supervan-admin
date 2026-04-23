import { Link } from "react-router-dom";
import { HOME } from "../services/consts";

function LoginPage() {
    return(
        <section className="login-section">
            <div className="login-hero text-display-xl">ElectroVan</div>
            <div className="login-subheader text-heading-lg">админ панель</div>
            <div className="login-block">
                <div className="login-schedule">
                    <div className="login-title text-display-xl">Вход в админ панель</div>
                    <input className="login-graph text-heading-lg" placeholder="Введите логин" />
                    <input className="password-graph text-heading-lg" placeholder="Введите пароль" />
                </div>
                <Link to={HOME} className="login-button text-heading-lg">Войти</Link>
            </div>
        </section>
    )
}

export default LoginPage;