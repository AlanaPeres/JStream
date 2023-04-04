import { TransferenciaForm } from "../../components/transferenciaComponent/transferenciaComponent";
import style from './transferenciaPage.module.css';

export const Transferencia = () => {
    return(
        <>
            <header className={style.header}>component header aqui</header>
             <TransferenciaForm />
            <footer className={style.footer}>component footer aqui</footer>
        </>
    );
}