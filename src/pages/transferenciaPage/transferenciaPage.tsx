import { TransferenciaContent } from "../../components/transferenciaComponent/transferenciaComponent";
import style from './transferenciaPage.module.css';
import { HeaderMobile } from "../../components/headerMobileComponent/headerMobileComponent";
import { NavBarPrincipal } from "../../components/navBarPrincipalComponent/navBarPrincipalComponent";


export const TransferenciaPage = () => {
    let user = ' matheus';
    let saldoAtual = 500.0;
    return(
        <>
            <HeaderMobile user={user} saldoAtual={saldoAtual} />

            <TransferenciaContent />
            
            <NavBarPrincipal />
        </>
    );
}