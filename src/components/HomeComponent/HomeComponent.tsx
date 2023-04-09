import imagedesktop from '../../assets/home_image.webp';
import logo from '../../assets/logo_dark.webp';
import { ButtonTextComponent } from '../ButtonComponent/ButtonComponent';
import { Link } from 'react-router-dom';
import Style from './HomeComponent.module.css';

export const HomeComponent = () => {
    return (
        <>
            <div className={Style.container}>
                <img
                    className={Style.imagem}
                    src={imagedesktop}
                    alt="Imagem desktop"
                />
                <img
                    className={Style.logotipo}
                    src={logo}
                    alt="Imagem da logo"
                />
                <h1 className={Style.soft}>
                    Soft <span className={Style.spanfin}>Finance</span>
                </h1>
                <div className={Style.btn_arrow}>
                    <Link to="/login">
                        <ButtonTextComponent description="Entrar" />
                    </Link>
                    <Link to="/registrar">
                        <ButtonTextComponent description="Registrar" />
                    </Link>
                </div>
            </div>
        </>
    );
};
